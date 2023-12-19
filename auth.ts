'use server'
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";
import { authConfig } from "./auth.config";
import { getUsuarioPorEmail } from './app/lib/infra/usuarios'
// async function getUsuario(email: string): Promise<Usuario | undefined> {
//     try {
//         const usuario = await sql<Usuario> `SELECT * FROM usuarios WHERE email=${email}`;
//         return usuario.rows[0];
//     } catch (err) {
//         console.error('Erro na consulta de usuário', err);
//         throw new Error('Erro na consulta de usuário')

//     }
// }

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {

                const parsedCredentials = z
                    .object({ email: z.string().email(), senha: z.string().min(5) })
                    .safeParse(credentials);
                    if(parsedCredentials.success){
                        const { email, senha } = parsedCredentials.data;

                        const usuario = await getUsuarioPorEmail(email);
                        if(!usuario) return null;

                        const senhaOk = await bcrypt.compare(senha, usuario.senha);
                        if(senhaOk) return usuario;
                    }
                    console.log("Login Inválido");
                    return null;
            },
        }),
    ]
})

// export const  createUser  = NextAuth({
//     ...authConfig,
//     async create({nome, email, senha}) {

//         return fetch(`${process.env.NEXT_URL}/api/`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 nome: nome,
//                 email: email,
//                 senha: senha,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
//     }
// })

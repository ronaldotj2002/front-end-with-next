
'use server'
import { signIn } from "../../../auth";
import { AuthError } from "next-auth";
import { Usuario } from "../domain/models";
import { sql } from "@vercel/postgres";

export async function getUsuarioPorEmail(email: string): Promise<Usuario | undefined> {
    try {
        const usuario = await sql<Usuario> `SELECT * FROM usuarios WHERE email=${email}`;
        return usuario.rows[0];
    } catch (err) {
        console.error('Erro na consulta de usuário', err);
        throw new Error('Erro na consulta de usuário')

    }
}

export async function login(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (err) {
        if(err instanceof AuthError) {
            return 'Login Inválido.'
        }
        throw err
    }
}

// export async function cadastro( formData: FormData) {
//     try {
//         await createUser(formData);
//     } catch (err) {
//         if(err instanceof AuthError) {
//             return 'Login Inválido.'
//         }
//         throw err
//     }
// }
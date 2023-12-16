'use server'

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { z } from 'zod'
import NextAuth from 'next-auth'
import { getUsuarioPorEmail } from './usuarios';



export async function cadastrar(prevState: any, formData: FormData) {
  
  console.log("--- REQUEST ---");
  let hashSenha = await bcrypt.hash(`${formData.get('senha')}`, 10);

  const schema = z.object({
    email: z.string().min(7),
    nome: z.string().min(6),
    senha: z.string().min(5),
  })
  
  const parse = schema.parse({
    email: formData.get('email'),
    nome: formData.get('nome'),
    senha: formData.get('senha'),
})
 
  console.log("--- REQUEST ---", parse);
  const usuario = await getUsuarioPorEmail(parse.email);
    if(usuario) {
      console.log(`O email informado: ${parse.email} já possui um cadastro.`);
      return
    }

    try {
    
        let res = await sql `
            INSERT INTO usuarios (email, nome, senha)
            VALUES (${parse.email}, ${parse.nome}, ${hashSenha} )
            ON CONFLICT (id) DO NOTHING;
            `;

        const resposta =  NextResponse.json({ res }, { status: 200 })
         console.log("USUÁRIO CADASTRADO COM SUCESSO!", resposta.status);
    } 
    catch (err) {
         NextResponse.json({ err }, { status: 500 })
    }

  //   try {
    
  //     let res = await sql `
  //         INSERT INTO usuarios (email, nome, senha)
  //         VALUES ('teste@gmail.com', 'teste', ${hashSenha} )
  //         ON CONFLICT (id) DO NOTHING;
  //         `;

  //     return NextResponse.json({ res }, { status: 200 })
  // } 
  // catch (err) {
  //     return NextResponse.json({ err }, { status: 500 })
  // }
   
}
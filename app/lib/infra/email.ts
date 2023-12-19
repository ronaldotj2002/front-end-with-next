'use server'

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { z } from 'zod'
import NextAuth from 'next-auth'
import { getUsuarioPorEmail } from './usuarios';



export async function cadastrarEmail(prevState: any, formData: FormData) {
  
  console.log("--- REQUEST ---");
//   let hashSenha = await bcrypt.hash(`${formData.get('senha')}`, 10);

  const schema = z.object({
    email: z.string().min(7)
  })
  
  const parse = schema.parse({
    email: formData.get('email')
})
 
  console.log("--- REQUEST ---", parse);
//   const usuario = await getUsuarioPorEmail(parse.email);
    // if(usuario) {
    //   console.log(`O email informado: ${parse.email} já possui um cadastro.`);
    //   return
    // }

    try {
    
        let res = await sql `
            INSERT INTO newsletter (email)
            VALUES (${parse.email} )
            ON CONFLICT (id) DO NOTHING;
            `;

        const resposta =  NextResponse.json({ res }, { status: 200 })
         console.log("EMAIL CADASTRADO COM SUCESSO!", resposta.status);        
    } 
    catch (err) {
         NextResponse.json({ err }, { status: 500 })
         console.log("EMAIL ERRO", err); 
    }
   
}
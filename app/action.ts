'use server'

import { revalidatePath } from 'next/cache'
import { sql } from '@vercel/postgres'
import { z } from 'zod'
import bcrypt from 'bcrypt';

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export async function createUser(prevState: any, formData: FormData) {
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

console.log("parse", parse)

  if (!parse) {
    return { message: 'Falha ao criar usuário' }
  }

  const data = parse

  console.log("====> ", data)
  try {
    let hashSenha = await bcrypt.hash(`${data.senha}`, 10);
    await sql`
            INSERT INTO usuarios (email, nome, senha)
             VALUES (${data.email}, '${data.nome}', ${hashSenha})
             ON CONFLICT (id) DO NOTHING;    
            `

    revalidatePath('/')
    return { message: `Usuário criado ${data}` }
  } catch (e) {
    return { message: 'Erro ao criar usuário', e }
  }
}

export async function deleteTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string().min(1),
    todo: z.string().min(1),
  })
  const data = schema.parse({
    id: formData.get('id'),
    todo: formData.get('todo'),
  })

  try {
    await sql`
      DELETE FROM todos
      WHERE id = ${data.id};
    `

    revalidatePath('/')
    return { message: `Deleted todo ${data.todo}` }
  } catch (e) {
    return { message: 'Failed to delete todo' }
  }
}
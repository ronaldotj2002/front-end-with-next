import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST() {
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify({ time: new Date().toISOString() }),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }

// export async function heandler({nome, email, senha}) {

//     console.log("--- REQUEST ---", nome, email, senha);
//     try {
//         let hashSenha = await bcrypt.hash('teste', 10);

        // let res = await sql `
        //     INSERT INTO usuarios (nome, email, senha)
        //     VALUES ('Carlos', 'carlos@gmail.com', ${hashSenha})
        //     ON CONFLICT (id) DO NOTHING;
        //     `;

        // return NextResponse.json({ res }, { status: 200 })
    // } 
    // catch (err) {
    //     return NextResponse.json({ err }, { status: 500 })
    // }
    // return NextResponse.json({
    //     teste: [
    //         {
    //             id: 1,
    //             nome: 'Cubos Mágicos'
    //         }
    //     ],
    // })
// }
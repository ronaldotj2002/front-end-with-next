'use server'

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log("REQUEST ======================================>", request.json());
    try {
        const usuario = await sql `SELECT nome, email, senha FROM usuarios`;
        return NextResponse.json({ data: usuario.rows }, { status: 201 });
     
    } catch (err) {
        console.error('Erro na consulta de usuário', err);
        throw new Error('Erro na consulta de usuário')

    }
}

   

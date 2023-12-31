
import Link from 'next/link';
import React from 'react';
import Email from './lib/ui/email';

export default function Home() {

  return (   
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5x1 w-full items-center justify-between font-mono text-sm">
        <h1>Projeto de Bloco</h1>
        <Link href="/protegido">Área Protegida</Link>
      </div>
   
    </main>
    
  )
}

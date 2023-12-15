'use client'

import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { createUser } from '../../action';

const initialState = {
    message: null,
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button type="submit" aria-disabled={pending} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar</button>
    )
}



export default function Cadastro() {

    const [state, formAction] = useFormState(createUser, initialState)
    // const [errorMessage, formAction] = useFormState(cadastro, undefined);
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Cadastro</h2>
        </div>
      
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={formAction}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"/>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Nome</label>
              <div className="mt-2">
                <input id="nome" name="nome" type="nome" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"/>
              </div>
            </div>
      
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">Senha</label>              
              </div>
            
              <div className="mt-2">
                <input id="password" name="senha" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" />
              </div>
            </div>
                  
            <div>
                <SubmitButton />
              {/* <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar</button> */}
            </div>
          </form>
      
          <p className="mt-10 text-center text-sm text-gray-500">
            Já possui conta?
            <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Logar</Link>
          </p>
        </div>
      </div>
    )
  }
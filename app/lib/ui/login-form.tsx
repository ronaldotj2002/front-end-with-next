'use client'

import { useFormState } from 'react-dom';
import { login } from '../infra/usuarios';
import Link from 'next/link';


export default function loginForm() {
    const [errorMessage, formAction] = useFormState(login, undefined);

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 border-solid " >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action={formAction} method="POST">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">E-mail </label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Senha</label>

                        </div>
                        <div className="mt-2">
                            <input id="senha" name="senha" type="password" required minLength={5} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logar</button>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Não possui login?
            <               Link href="/cadastro" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Criar Conta.</Link>
                    </p>
                    <div className="flex h-5 items-end space-x-1">
                        {errorMessage && (
                        <>
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                        )}

                    </div>
                </form>
            </div>
        </div>
    )
}
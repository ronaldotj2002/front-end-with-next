import { listarUfs } from "@/lib/ibge";

export default async function Ibge() {

    const estados = await listarUfs();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <ul>
              {estados.map((estado) => (
                <li className="bg-green-300 m-5 p-4" key={estado.id}>
                  {estado.nome}
                </li>
              ))}
          </ul>
        </main>
      )
}
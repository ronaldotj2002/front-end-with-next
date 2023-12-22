// 'use server'
// import { cadastrar } from "@/app/lib/infra/cadastro";



// export async function POST(request: Request) {
//     let usuario = await request.json();
//     console.log("CHEGUEI ROUTE CADASTRO......", usuario)
//     try {
//       usuario = await cadastrar(usuario);
//     }catch(error) {
//       return Response.json({ error });
//     }  
//     return Response.json({ mensagem: "Contato Incluído com sucesso" });
//   }
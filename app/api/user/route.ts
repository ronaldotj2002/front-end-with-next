import { cadastro } from '../../../services/user'
import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({
        teste: [
            {
                id: 1,
                nome: 'Cubos Mágicos'
            }
        ],
    })
}

export async function POST(request: Request, context: any) {
    // const data = await request.json();
    // return NextResponse.json({
    //     data
    // })
    // const { params } = context;

    // console.log("POST", params)
    // try {
        
    //         const newuser = await request.json();
    //             const dados = NextResponse.json({
    //                 newuser
    //             })
    //             console.log("DADOSSSSSSSSS", newuser)
               
    //         } catch (err) {
                
    //         }
}

// export default function handler(req, res) {
//     try {
//         const newuser = cadastro(req.body)
//         res.status(201).json(newuser)
//     } catch (err) {
//         res.status(400).json(err.message)
//     }
// }
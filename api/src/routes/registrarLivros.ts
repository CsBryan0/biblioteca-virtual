import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.post("/", async (req: Request, res: Response) => {
    try {
        const { autor, nome, anoDePublicacao} = req.body

        const novoLivro = await prisma.livro.create({
            data: {
                autor,
                nome,
                anoDePublicacao,
            }, 
        })
        res.status(201).json(novoLivro)
    } catch (error) {
        console.error("Erro ao registrar o livro: ", error)
    }
})

export default router
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { nomeDaPessoa, nomeDoLivro } = req.body;

    const novoEmprestimo = await prisma.emprestimo.create({
      data: {
        nomeDaPessoa,
        livro: {
          connect: { nome: nomeDoLivro },
        },
      },
    });
    res.status(201).json(novoEmprestimo);
  } catch (error) {
    console.error("Erro ao fazer o empréstimo: ", error);
    res.status(500).json({ error: "Erro ao fazer o empréstimo" });
  }
});

export default router;

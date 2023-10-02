import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  try {
    const { nomeDaPessoa, livroId, dataDevolucaoReal } = req.body;

    const emprestimo = await prisma.emprestimo.findUnique({
      where: {
        id: livroId,
      },
    });

    if (!emprestimo) {
      return res.status(404).json({ error: "Empréstimo não encontrado." });
    }

    const devolucao = await prisma.devolucao.create({
      data: {
        nomeDaPessoa,
        livro: { connect: { id: livroId } }, 
        dataDevolucaoReal,
        emprestimo: { connect: { id: emprestimo.id } }, 
      },
    });

    console.log("Requisição recebida: ", req.body)
    res.json(devolucao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocorreu um erro ao criar a devolução." });
  }
});

export default router;

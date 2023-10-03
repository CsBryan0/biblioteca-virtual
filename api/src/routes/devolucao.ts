import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { formatISO } from "date-fns";

const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  try {
    const { nomeDaPessoa, livroNome, dataDevolucaoReal } = req.body;

    // Verifique se a dataDevolucaoReal é uma string e está em um formato válido
    if (
      typeof dataDevolucaoReal !== "string" ||
      isNaN(new Date(dataDevolucaoReal).getTime())
    ) {
      return res.status(400).json({ error: "Data de devolução inválida." });
    }

    // Use o Prisma para encontrar o livro com base no nome
    const livro = await prisma.livro.findUnique({
      where: {
        nome: livroNome,
      },
    });

    if (!livro) {
      return res.status(404).json({ error: "Livro não encontrado." });
    }

    const dataDevolucaoFormatada = formatISO(new Date(dataDevolucaoReal));

    const devolucao = await prisma.devolucao.create({
      data: {
        nomeDaPessoa,
        livro: { connect: { id: livro.id } },
        dataDevolucaoReal: dataDevolucaoFormatada, 
      },
    });

    console.log("Requisição recebida: ", req.body);
    res.json(devolucao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocorreu um erro ao criar a devolução." });
  }
});

export default router;

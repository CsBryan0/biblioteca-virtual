import express from 'express';
import cors from 'cors'


import registrarLivrosRouter from './routes/registrarLivros';
import emprestimoRouter from './routes/emprestimo'
import devolucaoRouter from './routes/devolucao'

const app = express();
const PORT = process.env.PORT || 3333;
app.use(express.json());

app.use(cors())

app.get('/', (req, res) => {
  res.send('Servidor está rodando! pourra alskdjasldj');
});

app.use('/api/livros', registrarLivrosRouter);
app.use('/api/emprestimos', emprestimoRouter)
app.use('/api/devolucoes', devolucaoRouter)


app.listen(PORT, () => {
  console.log(`Servidor es tá ouvindo na porta ${PORT}`);
});

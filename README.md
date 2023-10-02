---

# Biblioteca Virtual - Sistema de Gerenciamento de Biblioteca

## Descrição

O projeto da Biblioteca Virtual é um sistema de gerenciamento de biblioteca que permite registrar livros, empréstimos e devoluções de maneira eficiente e organizada. O sistema foi desenvolvido com as principais tecnologias e práticas modernas de desenvolvimento.

### Principais Tecnologias Utilizadas

- Frontend: React.js
- Backend: Node.js com Express.js
- Banco de Dados: MySQL com Prisma ORM

## Configuração do Ambiente de Desenvolvimento

Para executar este projeto em sua máquina local, siga as etapas abaixo:

### Pré-requisitos

- Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download em [nodejs.org](https://nodejs.org/).

- Instale o MySQL em sua máquina e configure as variáveis de ambiente necessárias.

### Configuração do Backend

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/seu-usuario/biblioteca-virtual.git
   ```

2. Navegue até o diretório do backend:

   ```bash
   cd biblioteca-virtual/backend
   ```

3. Instale as dependências do backend:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` no diretório `backend` e defina as variáveis de ambiente necessárias, incluindo as configurações do banco de dados.

5. Execute as migrações do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

6. Inicie o servidor do backend:

   ```bash
   npm run dev
   ```

### Configuração do Frontend

1. Navegue até o diretório do frontend:

   ```bash
   cd biblioteca-virtual/frontend
   ```

2. Instale as dependências do frontend:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

### Uso

- O frontend estará disponível em [http://localhost:3000](http://localhost:3000).
- A API do backend estará disponível em [http://localhost:3333](http://localhost:3333).

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) ou enviar pull requests com melhorias ou correções.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

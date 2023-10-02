import axios from "axios";
import React, { useState } from "react";

const LoanRegistrationForm: React.FC = () => {
  const [nomeDaPessoa, setPersonName] = useState("");
  const [nomeDoLivro, setBookName] = useState("");

  const handlePersonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonName(e.target.value);
  };

  const handleBookNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode enviar os dados do empréstimo para o backend
    const loanData = {
      nomeDaPessoa,
      nomeDoLivro,
    };

    // Você pode fazer uma chamada à API para registrar o empréstimo
    axios
      .post("http://localhost:3333/api/emprestimos", loanData)
      .then((response) => {
        console.log("Empréstimo registrado com sucesso", response.data);
      })
      .catch((error) => {
        console.error("Erro ao registrar o empréstimo", error);
      });

    setPersonName("");
    setBookName("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 p-6 shadow-md rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Registrar Empréstimo</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Nome da Pessoa
          </label>
          <input
            type="text"
            value={nomeDaPessoa}
            onChange={handlePersonNameChange}
            className="border border-gray-400 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Livro</label>
          <input
            type="text"
            value={nomeDoLivro}
            onChange={handleBookNameChange}
            className="border border-gray-400 p-2 w-full rounded"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Registrar Empréstimo
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanRegistrationForm;

import axios from "axios";
import React, { useState } from "react";

const ReturnRegistrationForm: React.FC = () => {
  const [nomeDaPessoa, setPersonName] = useState("");
  const [livroNome, setBookName] = useState("");
  const [dataDevolucaoReal, setReturnDate] = useState("");

  const handlePersonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonName(e.target.value);
  };

  const handleBookIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookName(e.target.value);
  };

  const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReturnDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode enviar os dados da devolução para o backend
    const returnData = {
      nomeDaPessoa,
      livroNome,
      dataDevolucaoReal,
    };

    // Você pode fazer uma chamada à API para registrar a devolução
    axios
      .post("http://localhost:3333/api/devolucoes", returnData)
      .then((response) => {
        console.log("Devolução realizada com sucesso", response.data);
      })
      .catch((error) => {
        console.error("Erro na devolução", error);
      });

    setPersonName("");
    setBookName("");
    setReturnDate("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 p-6 shadow-md rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Registrar Devolução</h2>
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
            value={livroNome}
            onChange={handleBookIdChange}
            className="border border-gray-400 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Data da Devolução
          </label>
          <input
            type="text"
            value={dataDevolucaoReal}
            onChange={handleReturnDateChange}
            className="border border-gray-400 p-2 w-full rounded"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Registrar Devolução
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReturnRegistrationForm;

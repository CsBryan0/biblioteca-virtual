import axios from "axios";
import React, { useState } from "react";

const BookRegistrationForm: React.FC = () => {
  const [autor, setAuthor] = useState("");
  const [nome, setBookName] = useState("");
  const [anoDePublicacao, setPublicationYear] = useState("");

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleBookNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookName(e.target.value);
  };

  const handlePublicationYearChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPublicationYear(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode enviar os dados do livro para o backend
    const bookData = {
      autor,
      nome,
      anoDePublicacao,
    };

    // Você pode fazer uma chamada à API para registrar o livro
    axios
      .post("http://localhost:3333/api/livros", bookData)
      .then((response) => {
        console.log("Livro registrado com sucesso ", response.data);
      })
      .catch((error) => {
        console.error("Erro ao registrar o livro", error);
      });

    setAuthor("");
    setBookName("");
    setPublicationYear("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 p-6 shadow-md rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Registrar Livro</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Autor</label>
          <input
            type="text"
            value={autor}
            onChange={handleAuthorChange}
            className="border border-gray-400 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Nome do Livro
          </label>
          <input
            type="text"
            value={nome}
            onChange={handleBookNameChange}
            className="border border-gray-400 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Ano de Publicação
          </label>
          <input
            type="text"
            value={anoDePublicacao}
            onChange={handlePublicationYearChange}
            className="border border-gray-400 p-2 w-full rounded"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookRegistrationForm;

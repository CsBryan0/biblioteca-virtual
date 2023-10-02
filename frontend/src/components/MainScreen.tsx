// src/components/MainScreen.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom

const MainScreen: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Biblioteca - Tela Principal</h2>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/register-book" className="bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 transition duration-300">
          Registrar Livro
        </Link>
        <Link to="/register-loan" className="bg-green-500 text-white px-4 py-3 rounded hover:bg-green-600 transition duration-300">
          Registrar Empréstimo
        </Link>
        <Link to="/register-return" className="bg-purple-500 text-white px-4 py-3 rounded hover:bg-purple-600 transition duration-300">
          Registrar Devolução
        </Link>

      </div>
    </div>
  );
};

export default MainScreen;

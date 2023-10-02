import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import BookRegistrationForm from "./components/BookRegistrationForm";
import LoanRegistrationForm from "./components/LoanRegistrationForm";
import ReturnRegistrationForm from "./components/ReturnRegistrationForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/register-book" element={<BookRegistrationForm />} />
          <Route path="/register-loan" element={<LoanRegistrationForm />} />
          <Route path="/register-return" element={<ReturnRegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

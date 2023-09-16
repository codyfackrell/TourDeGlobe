import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Flashcards from "./components/flashcards/Flashcards";
import SavedCountries from "./components/SavedCountries";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/countries" element={<Flashcards />} />
            <Route path="/savedCountries" element={<SavedCountries />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;

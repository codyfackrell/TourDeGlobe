import { Routes, Route } from "react-router-dom";
import { CountryProvider } from "./store/countryContext";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Flashcards from "./components/flashcards/Flashcards";
import SavedCountries from "./components/SavedCountries";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CountryProvider>
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
        <Footer />
      </CountryProvider>
    </div>
  );
}

export default App;

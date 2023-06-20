import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import PokemonList from "./components/PokemonList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/about" element={<p>About page</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

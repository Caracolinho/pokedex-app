import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pokemons from "./screens/Pokemons";
import Pokemon from "./screens/Pokemon";
import NotFound from "./screens/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

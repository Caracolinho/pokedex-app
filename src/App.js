import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Pokemons, Pokemon, NotFound} from "./screens";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:id" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

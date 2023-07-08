import { Routes, Route, Navigate, useNavigate, json } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

function App() {

  const [curretGame, setCurretGame] = useState("ForwardDungeon");

  function changeCurretGame (game) {
    setCurretGame(game);
  }

  return (
    <Routes>
      <Route
        path="/forwardungeon"
        element={
          <div className="body">
            <Header curretGame={curretGame}/>
            <Main />
            <Footer />
          </div>
        }
      />
      <Route
        path="/arena"
        element={
          <div className="body">
            <Header curretGame={curretGame}/>
            <Main />
            <Footer />
          </div>
        }
      />
      <Route
        path="/bunker"
        element={
          <div className="body">
            <Header curretGame={curretGame}/>
            <Main />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;

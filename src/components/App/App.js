import { Routes, Route, Navigate, useNavigate, json } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

import { ArenaPosts, BunkerPosts, FDPosts } from "../../constants/constants";

function App() {
  const [curretGame, setCurretGame] = useState("");

  function changeCurretGame(game) {
    setCurretGame(game);
  }

  return (
    <Routes>
      <Route
        path="/ForwardDungeonSite/"
        element={
          <div className="body">
            <Header curretGame={curretGame} />
            <Main posts={FDPosts}/>
            <Footer />
          </div>
        }
      />
      <Route
        path="/ForwardDungeonSite/arena"
        element={
          <div className="body">
            <Header curretGame={curretGame} />
            <Main posts={ArenaPosts}/>
            <Footer />
          </div>
        }
      />
      <Route
        path="/ForwardDungeonSite/bunker"
        element={
          <div className="body">
            <Header curretGame={curretGame} />
            <Main posts={BunkerPosts}/>
            <Footer />
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

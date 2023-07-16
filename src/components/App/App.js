import { Routes, Route, Navigate, useNavigate, json } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

import { BunkerPosts, FDPosts } from "../../constants/constants";
import { ArenaAbout, ArenaPosts } from "../../constants/ArenaConsts";

import { AboutGame} from "../AboutGame/AboutGame";

function App() {
  const [curretGame, setCurretGame] = useState("");

  return (
    <Routes>
      <Route
        path="/forwarddungeon"
        element={
          <div className="body">
            <Header curretGame={curretGame}/>
            <Main posts={FDPosts}/>
            <Footer />
          </div>
        }
      />
      <Route
        path="/arena"
        element={
          <div className="body">
            <Header curretGame={curretGame} />
            <AboutGame game={ArenaAbout}/>
            
            <Main posts={ArenaPosts}/>
            <Footer />
          </div>
        }
      />
      <Route
        path="/bunker"
        element={
          <div className="body">
            <Header curretGame={curretGame} />
            <Main posts={BunkerPosts}/>
            <Footer />
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/arena" replace />} />
    </Routes>
  );
}

export default App;

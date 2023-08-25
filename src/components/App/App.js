import { Routes, Route, Navigate, useNavigate, json } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

import { BunkerPosts, FDPosts } from "../../constants/constants";
import { ArenaAbout, ArenaPosts } from "../../constants/ArenaConsts";

import { AboutGame } from "../AboutGame/AboutGame";
import { Landing } from "../Landing/Landing";

function App() {
  const [curretGame, setCurretGame] = useState("");

  return (
    <div className="body">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header curretGame={curretGame} />
              <Landing />
              <Footer />
            </>
          }
        />
        <Route
          path="/forwarddungeon"
          element={
            <>
              <Header curretGame={curretGame} />
              <Main posts={FDPosts} />
              <Footer />
            </>
          }
        />
        <Route
          path="/arena"
          element={
            <>
              <Header curretGame={curretGame} />
              <AboutGame game={ArenaAbout} />
              <Main posts={ArenaPosts} />
              <Footer />
            </>
          }
        />
        <Route
          path="/bunker"
          element={
            <>
              <Header curretGame={curretGame} />
              <Main posts={BunkerPosts} />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/arena" replace />} />
      </Routes>
    </div>
  );
}

export default App;

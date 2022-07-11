import React from "react";
import './App.css';
import Menu from "./components/Menu";
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Track from "./components/Track";


function App() {
  return (
      <BrowserRouter>
          <Menu />
          <Routes>
              <Route path={`/`} element={<Home />} />
              <Route path={`/home`} element={<Home />} />
              <Route path={`/track/:id`} element={<Track />} props={{'trackId': 1}} />
              <Route path={`/*`} element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

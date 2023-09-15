import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import P404 from "./Routes/P404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="*" element={<P404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

export default function App() {
  let [language, setLanguage] = useState("hi");
  let [search, setSearch] = useState("");
  function changeLanguage(data) {
    setLanguage(data);
  }
  function changeSearch(data) {
    setSearch(data);
  }
  return (
    <>
      <BrowserRouter>
      <Navbar changeLanguage = {changeLanguage} changeSearch = {changeSearch} />
          <Routes>
            <Route path='/' element={<Home search={search} language={language} q="All" />} />
            <Route path='/All' element={<Home search={search} language={language} q="All" />} />
            <Route path='/Politics' element={<Home search={search} language={language} q="Politics" />} />
            <Route path='/Crime' element={<Home search={search} language={language} q="Crime" />} />
            <Route path='/Education' element={<Home search={search} language={language} q="Education" />} />
            <Route path='/Science' element={<Home search={search} language={language} q="Science" />} />
            <Route path='/Technology' element={<Home search={search} language={language} q="Technology" />} />
            <Route path='/Sports' element={<Home search={search} language={language} q="Sports" />} />
            <Route path='/Cricket' element={<Home search={search} language={language} q="Cricket" />} />
            <Route path='/IPL' element={<Home search={search} language={language} q="IPL" />} />
            <Route path='/Covid-19' element={<Home search={search} language={language} q="Covid-19" />} />
            <Route path='/India' element={<Home search={search} language={language} q="India" />} />
            <Route path='/World' element={<Home search={search} language={language} q="World" />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

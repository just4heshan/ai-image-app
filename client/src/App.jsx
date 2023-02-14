import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./page";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full h-[10vh] sm:px-8 px-4 py-4 flex justify-between items-center border-blue border-[1px]">
        <Link to="/">
          <img src={logo} alt="OpenAI Logo" className="w-28" />
        </Link>
        <Link
          to="./create-post"
          className="px-4 py-2 bg-blue-light rounded-md text-white font-bold tracking-wider hover:bg-blue-light/5 hover:text-blue-light hover:scale-95 transition duration-200"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full h-[calc(100vh-10vh)] bg-white/80 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

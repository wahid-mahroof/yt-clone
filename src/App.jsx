import React from "react";
import Nav from "./components/Nav";
import PlayingVideo from "./components/PlayingVideo";
import Search from "./components/Search";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Loading from "./loader/Loading";
import { useAuth } from "./context/AuthProvider";

function App() {
  const { loading } = useAuth();
  return (
    <div>
      {loading && <Loading />}
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App;

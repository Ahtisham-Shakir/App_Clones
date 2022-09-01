import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/room/:roomId" element={<Chat />} />
          </Routes>
          <Routes>
            <Route path="/" element={<h1>Welcome</h1>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

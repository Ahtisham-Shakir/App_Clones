import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Login from "./login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Router>
              <Sidebar />
              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
              </Routes>
              <Routes>
                <Route path="/" element={<h1>Welcome</h1>} />
              </Routes>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

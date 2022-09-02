import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Login from "./login/Login";
import { useStateValue } from "./StateProvider";
import HomeLogo from "./components/homeLogo/HomeLogo";

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
                <Route path="/" element={<HomeLogo />} />
              </Routes>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

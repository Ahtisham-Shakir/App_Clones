import React from "react";
import "./App.css";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import Widgets from "./components/widgets/Widgets";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;

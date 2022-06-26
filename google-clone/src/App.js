import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Google Clone</h1> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<h1>This is Search page</h1>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

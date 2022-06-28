import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}] = useStateValue();

  return (
    <div className="app">
      {
        !user ? (
          <Login/>
          
        ) : (
          <div className='app__body'>
            <Router>
              <Sidebar />
              <Routes>
                <Route path='/' element={<></>} />
                <Route path='/rooms/:roomId' element={<Chat />} />
              </Routes>
            </Router>
          </div>
        )
      }

    </div>
  );
}

export default App;

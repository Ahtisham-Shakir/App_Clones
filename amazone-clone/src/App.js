import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<h1>Login</h1>}/>
          <Route path='/checkout' element={<h1>Checout</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

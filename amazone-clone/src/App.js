import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<h1>Home</h1>}/>
          <Route path='/login' element={<h1>Login</h1>}/>
          <Route path='/checkout' element={<h1>Checout</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

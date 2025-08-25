import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

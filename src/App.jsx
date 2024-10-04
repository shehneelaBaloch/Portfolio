import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navb from './components/Navb';  // Navbar component
import Home from './pages/Home';      // Home component (dummy or actual content)

import './App.css'; // Global CSS
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Navb />
        <Routes>
          {/* Home route should match exactly */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
}

export default App;

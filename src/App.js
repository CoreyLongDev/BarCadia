import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Play from './Pages/Play';
import Drink from './Pages/Drink';
import Events from './Pages/Events';
import About from './Pages/About';
import Login from './Pages/Login';
import NotFoundPage from './Pages/NotFoundPage';
import Member from './Pages/Member';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header />

    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/play' element={<Play />} />
          <Route path='/drink' element={<Drink />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/member' element={<Member />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Router>

    <Footer />
    </>
  );
}

export default App;

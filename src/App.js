import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Play from './Pages/Play';
import Reload from './Pages/Reload';
import Events from './Pages/Events';
import About from './Pages/About';
import Login from './Pages/Login';
import Connect from './Pages/Connect'
import NotFoundPage from './Pages/NotFoundPage';
import Member from './Pages/Member';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Header />

    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Play' element={<Play />} />
          <Route path='/Reload' element={<Reload />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Connect' element={<Connect />} />
          <Route path='/Member' element={<Member />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Router>

    <Footer />
    </>
  );
}

export default App;

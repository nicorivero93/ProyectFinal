import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Rol from './components/rol';
import Contact from './components/contact';
import News from './components/news';
import About from './components/about';
import Login from './components/login';
import Register from './components/register';
import Admin from './components/admin';
import CreateCharacter from './components/createcharacter';
import CharacterList from './components/characterlist';


function App() {
    return (
        <Router>
            <Navbar /> {/* Navbar visible en todas las p�ginas */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rol" element={<Rol />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/create-character" element={<CreateCharacter />} />
                <Route path="/characters" element={<CharacterList />} />
            </Routes>
        </Router>
    );
}

export default App;
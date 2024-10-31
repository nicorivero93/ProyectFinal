import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
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

function AppContent() {
    const location = useLocation();
    const hideNavbarRoutes = ['/login', '/register'];

    return (
        <>
            {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige automáticamente a Login */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/rol" element={<Rol />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/create-character" element={<CreateCharacter />} />
                <Route path="/characters" element={<CharacterList />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;

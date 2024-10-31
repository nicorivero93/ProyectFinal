import React, {useState} from 'react';
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
import AuthService from './auth/auth-service';

function AppContent() {
    const location = useLocation();
    
    const [activeUser, setActiveUser] = useState(null);

    const hideNavbarRoutes = ['/login', '/register'];

    function displayNamememe(user) {
        console.log('imcoming user')
        setActiveUser(user);
    }

    return (
        <>
            {
            activeUser ? (
                <>
                <Navbar />
            <Routes>
                <Route path="/" element={<Rol />} /> {/* Redirige autom�ticamente a Login */}
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
                
            )
            : 
        (
            <Login onLoadUser={displayNamememe} testClick={displayNamememe} />
        )
            }
            {/* <AuthService onLoadUser={setActiveUser}></AuthService> */}
            
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

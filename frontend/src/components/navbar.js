import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './login';



function Navbar() {
    const navigate = useNavigate();
   

   

 /*   const handleLogout = async () => {
        await ({
            method: 'GET',
            credentials: 'include', // Para manejar las cookies con el backend
        });
        // Redirige al usuario al login después del logout
        navigate('/login');
    };
   */

    return (
        <nav>
            <ul>
                <li><Link to="/rol">Rol</Link></li>
                <li><Link to="/news">Novedades</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li><Link to="/about">Nosotros</Link></li>
                <li><button onClick={Login.handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
}
/**/
export default Navbar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/register', { // Asegúrate de que esta ruta coincide con la del backend
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });
            if (res.ok) {
                alert('Cuenta creada con éxito. Ahora puedes iniciar sesión.');
                navigate('/login'); // Redirige usando useNavigate
            } else {
                alert('Error al crear la cuenta');
            }
        } catch (error) {
            console.error('Error en el registro:', error);
            alert('Hubo un problema al registrar la cuenta. Intente más tarde.');
        }
    };

    return (
        <div>
            <h1>Crear Cuenta</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Usuario"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default Register;


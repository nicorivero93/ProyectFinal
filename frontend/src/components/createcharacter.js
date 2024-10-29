import React, { useState } from 'react';

function CreateCharacter() {
    const [name, setName] = useState('');
    const [charClass, setCharClass] = useState('');
    const [level, setLevel] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/characters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, class: charClass, level })
        });
        if (res.ok) {
            alert('Personaje creado con éxito');
            setName('');
            setCharClass('');
            setLevel(1);
        } else {
            alert('Error al crear personaje');
        }
    };

    return (
        <div>
            <h2>Crear Personaje</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Clase</label>
                <input type="text" value={charClass} onChange={(e) => setCharClass(e.target.value)} required />

                <label>Nivel</label>
                <input type="number" value={level} onChange={(e) => setLevel(e.target.value)} min="1" required />

                <button type="submit">Crear Personaje</button>
            </form>
        </div>
    );
}

export default CreateCharacter;

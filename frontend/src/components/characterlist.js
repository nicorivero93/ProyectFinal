import React, { useEffect, useState } from 'react';

function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        const res = await fetch('/characters');
        const data = await res.json();
        setCharacters(data);
    };

    return (
        <div>
            <h2>Lista de Personajes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Clase</th>
                        <th>Nivel</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map((character) => (
                        <tr key={character.id}>
                            <td>{character.name}</td>
                            <td>{character.class}</td>
                            <td>{character.level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CharacterList;

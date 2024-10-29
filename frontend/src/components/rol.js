import React, { useState } from 'react';
import mapaAquelarre from '../assets/mapa-aquelarre.jpg'; // Asegúrate de que esta imagen esté en la carpeta correcta

function Rol() {
    const [diceResult, setDiceResult] = useState([]);

    // Función para lanzar dados de múltiples caras
    const rollDice = (sides, count) => {
        const results = [];
        for (let i = 0; i < count; i++) {
            results.push(Math.floor(Math.random() * sides) + 1);
        }
        setDiceResult(results);
    };

    return (
        <div id="gameBoard">
            <h1>Bienvenido a Aquelarre</h1>
            <div id="mapSection">
                <h2>Mapa del Mundo</h2>
                <img src={mapaAquelarre} alt="Mapa de Aquelarre" />
            </div>

            <div id="diceRoller">
                <h2>Lanzador de Dados</h2>
                <label htmlFor="diceSides">Elige el tipo de dado:</label>
                <select id="diceSides" onChange={(e) => rollDice(parseInt(e.target.value), 1)}>
                    <option value="6">D6</option>
                    <option value="10">D10</option>
                    <option value="20">D20</option>
                </select>
                <button onClick={() => rollDice(6, 3)}>Lanzar 3 dados D6</button>
                <button onClick={() => rollDice(10, 2)}>Lanzar 2 dados D10</button>
                <button onClick={() => rollDice(20, 1)}>Lanzar 1 dado D20</button>

                <div id="diceResult">
                    <h3>Resultado:</h3>
                    {diceResult.map((result, index) => (
                        <span key={index}>Dado {index + 1}: {result} </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Rol;

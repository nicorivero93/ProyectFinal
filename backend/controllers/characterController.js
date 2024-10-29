const db = require('../config/db');

// Obtener todos los personajes
exports.getCharacters = async (req, res) => {
    const [characters] = await db.execute('SELECT * FROM characters');
    res.json(characters);
};

// Crear un nuevo personaje
exports.createCharacter = async (req, res) => {
    const { name, class: charClass, level } = req.body;
    const sql = 'INSERT INTO characters (name, class, level) VALUES (?, ?, ?)';
    try {
        await db.execute(sql, [name, charClass, level]);
        res.status(201).send('Personaje creado');
    } catch (error) {
        res.status(500).send('Error al crear personaje: ' + error.message);
    }
};

const bcrypt = require('bcrypt');
const db = require('../config/db'); // Importa la conexi�n a la base de datos

// Controlador para registrar un nuevo usuario
async function registerUser(req, res) {
    const { username, email, password } = req.body;

    try {
        // Verificar si el nombre de usuario o el correo ya existen en la base de datos
        const checkUserQuery = 'SELECT * FROM usuarios WHERE username = ? OR email = ?';
        const [existingUsers] = await db.execute(checkUserQuery, [username, email]);

        if (existingUsers.length > 0) {
            return res.status(400).json({ message: 'El nombre de usuario o el correo ya est�n registrados' });
        }

        // Cifrar la contrase�a antes de almacenarla
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = 'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)';
        await db.execute(query, [username, email, hashedPassword]);

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ message: 'No se pudo registrar el usuario' });
    }
}

// Controlador para loguear un usuario existente
async function loginUser(req, res) {
    const { username, password } = req.body;

    try {
        const query = 'SELECT * FROM usuarios WHERE username = ?';
        const [rows] = await db.execute(query, [username]);

        if (rows.length > 0) {
            const user = rows[0];

            // Comparar la contrase�a proporcionada con la almacenada en la base de datos
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                res.status(200).json({
                    message: 'Login exitoso',
                    user: { id: user.id_usuario, username: user.nombre_usuario }
                });
            } else {
                res.status(401).json({ message: 'Usuario o contrase�a incorrectos' });
            }
        } else {
            res.status(401).json({ message: 'Usuario o contrase�a incorrectos' });
        }
    } catch (error) {
        console.error('Error al loguear el usuario:', error);
        res.status(500).json({ message: 'No se pudo iniciar sesi�n' });
    }
}

module.exports = { registerUser, loginUser };


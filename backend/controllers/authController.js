const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../config/db');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    const user = rows[0];

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/rol');
    } else {
        res.status(401).send('Usuario o contraseña incorrectos');
    }
};

// Insertar el nuevo usuario en la base de datos
try {
    await db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    res.status(201).send('Cuenta creada con éxito. Ahora puedes iniciar sesión.');
} catch (error) {
    res.status(500).send('Error al crear la cuenta: ' + error.message);
}
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
};

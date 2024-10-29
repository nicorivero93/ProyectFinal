const db = require('../config/db');

exports.getUsers = async (req, res) => {
    const [users] = await db.execute('SELECT id, username, email FROM users');
    res.json(users);
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await db.execute('DELETE FROM users WHERE id = ?', [id]);
    res.send('Usuario eliminado');
};

const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const authController = require('./controllers/authController');
const characterController = require('./controllers/characterController');
const adminController = require('./controllers/adminController');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Rutas
app.post('/register', authController.register);
app.post('/login', authController.login);
app.get('/logout', authController.logout);
app.get('/admin/users', adminController.getUsers);
app.delete('/admin/users/:id', adminController.deleteUser);
app.get('/characters', characterController.getCharacters);   
app.post('/characters', characterController.createCharacter); 

// Página de Rol como principal tras el login
app.get('/rol', (req, res) => res.render('rol'));

// Server el frontend en producción
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../frontend/build'));
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});

// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController'); // Aseg�rate de tener el controlador

// Ruta para registrar un nuevo usuario
router.post('../register', registerUser);

// Ruta para loguear un usuario existente
router.post('../login', loginUser);

module.exports = router;

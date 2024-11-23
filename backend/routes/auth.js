// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController'); // Aseg�rate de tener el controlador


// Ruta para loguear un usuario existente
router.post('../login', loginUser);


module.exports = router;

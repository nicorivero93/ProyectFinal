// backend/app.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Importa las rutas de autenticación

const app = express();
app.use(cors());
app.use(express.json()); // Para interpretar JSON en el cuerpo de la solicitud

// Usar las rutas de autenticación con el prefijo /api/auth
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});


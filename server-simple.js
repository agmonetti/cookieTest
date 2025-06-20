const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Ruta para servir la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para simular el envío (sin email real)
app.post('/send-email', async (req, res) => {
    const { ip, location, fullName, userAgent, timestamp, screenResolution, language } = req.body;
    
    // Simular datos que se "robarían"
    console.log('🎯 DATOS "ROBADOS" (SIMULACIÓN):');
    console.log('================================');
    console.log(`IP: ${ip}`);
    console.log(`Ubicación: ${location}`);
    console.log(`Nombre: ${fullName}`);
    console.log(`Navegador: ${userAgent}`);
    console.log(`Resolución: ${screenResolution}`);
    console.log(`Idioma: ${language}`);
    console.log(`Fecha: ${new Date(timestamp).toLocaleString()}`);
    console.log('================================');
    console.log('Email simulado enviado a: agus.monetti01@gmail.com');
    console.log('');

    res.json({ 
        success: true, 
        message: 'Datos "robados" exitosamente (simulación)',
        data: {
            ip, location, fullName, userAgent, screenResolution, language, timestamp
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log('💡 Visita la página y haz clic en "Aceptar cookies"');
    console.log('📧 Los "datos robados" aparecerán aquí en la consola');
});

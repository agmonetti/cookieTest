const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = 3000;

// IMPORTANTE: Tu configuración de email
const EMAIL_USER = '-';
const EMAIL_PASS = '-';

console.log('🔧 Configurando servidor...');
console.log('📧 Email configurado:', EMAIL_USER);

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Agregar middleware para loggear todas las requests
app.use((req, res, next) => {
    console.log(`📥 ${req.method} ${req.url} - ${new Date().toISOString()}`);
    console.log('Headers:', req.headers);
    if (req.body && Object.keys(req.body).length > 0) {
        console.log('Body:', req.body);
    }
    next();
});

// Configuración del transportador de email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

// Verificar configuración de email al iniciar
transporter.verify(function(error, success) {
    if (error) {
        console.log('❌ Error en configuración de email:', error);
    } else {
        console.log('✅ Servidor de email configurado correctamente');
    }
});

// Ruta para servir la página principal
app.get('/', (req, res) => {
    console.log('📄 Sirviendo página principal');
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para enviar email con datos ficticios
app.post('/send-email', async (req, res) => {
    console.log('🚨 ===== /send-email ENDPOINT ALCANZADO =====');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Body completo:', req.body);
    
    const { ip, location, fullName, userAgent, timestamp, screenResolution, language } = req.body;
    
    const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d32f2f;">Alguien acepto la cookie !</h2>
            
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333;">Datos (Ficticios):</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>IP:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${ip}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Ubicación:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${location}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Nombre:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${fullName}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Navegador:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${userAgent}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Resolución:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${screenResolution}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Idioma:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${language}</td></tr>
                    <tr><td style="padding: 8px;"><strong>Fecha:</strong></td><td style="padding: 8px;">${new Date(timestamp).toLocaleString()}</td></tr>
                </table>
            </div>
            
        </div>
    `;

    const mailOptions = {
        from: EMAIL_USER,
        to: 'agus.monetti01@gmail.com',
        subject: 'Cookie aceptada',
        html: emailContent
    };

    console.log('📮 Intentando enviar email...');
    console.log('From:', EMAIL_USER);
    console.log('To: -');

    try {
        console.log('⏳ Llamando a transporter.sendMail...');
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ ¡EMAIL ENVIADO EXITOSAMENTE!');
        console.log('📧 Message ID:', info.messageId);
        console.log('📬 Response:', info.response);
        
        res.json({ 
            success: true, 
            message: 'Email enviado correctamente', 
            messageId: info.messageId 
        });
        
    } catch (error) {
        console.log('❌ ===== ERROR ENVIANDO EMAIL =====');
        console.log('Error name:', error.name);
        console.log('Error message:', error.message);
        console.log('Error code:', error.code);
        console.log('Error stack:', error.stack);
        console.log('========================================');
        
        res.status(500).json({ 
            success: false, 
            error: error.message,
            code: error.code 
        });
    }
    
    console.log('🏁 ===== FIN DE /send-email =====');
});

app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:3000');
    console.log('==========================================');
});

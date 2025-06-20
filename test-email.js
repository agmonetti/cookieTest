const nodemailer = require('nodemailer');

const EMAIL_USER = 'tpseguridad.prueba@gmail.com';
const EMAIL_PASS = 'qmwu rxem wiwz tbnf';

console.log('🧪 Probando configuración de email...');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

async function testEmail() {
    try {
        console.log('🔍 Verificando configuración...');
        await transporter.verify();
        console.log('✅ Configuración válida');
        
        console.log('📧 Enviando email de prueba...');
        const info = await transporter.sendMail({
            from: EMAIL_USER,
            to: 'agus.monetti01@gmail.com',
            subject: 'PRUEBA DIRECTA - Cookie Test',
            html: '<h1>🎯 Prueba directa exitosa</h1><p>Si recibes este email, todo funciona correctamente.</p>'
        });
        
        console.log('✅ Email enviado:', info.messageId);
        console.log('📬 Revisa agus.monetti01@gmail.com');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error('Código:', error.code);
    }
}

testEmail();

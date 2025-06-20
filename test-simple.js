console.log('🧪 PRUEBA SIMPLE DE EMAIL');

const nodemailer = require('nodemailer');

const EMAIL_USER = 'tpseguridad.prueba@gmail.com';
const EMAIL_PASS = 'qmwu rxem wiwz tbnf';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

const mailOptions = {
    from: EMAIL_USER,
    to: 'agus.monetti01@gmail.com',
    subject: 'PRUEBA - Cookie Test',
    html: '<h1>¡Prueba exitosa!</h1><p>Si recibes este email, la configuración funciona.</p>'
};

async function testEmail() {
    try {
        console.log('📧 Enviando email de prueba...');
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email enviado:', info.messageId);
    } catch (error) {
        console.error('❌ Error:', error);
    }
}

testEmail();

// Forzar que todos los logs se muestren
console.clear();
console.log('🍪 Script iniciado - versión con logs detallados');
console.log('🍪 Script cargado correctamente');

// FUNCIONES GLOBALES para el HTML inline
window.aceptarCookies = function() {
    console.log('🎯 ¡¡¡ACEPTAR COOKIES CLICKEADO!!!');
    
    // Crear cookies
    crearCookies();
    
    // ⭐ ENVIAR DATOS AL SERVIDOR - ESTA ES LA PARTE CRUCIAL
    console.log('📡 Enviando datos al servidor...');
    sendFakeData();
    
    // Ocultar banner
    ocultarBanner();
    
    alert('Cookies aceptadas. ¡Email de demostración enviado!');
};

window.rechazarCookies = function() {
    console.log('🚫 Usuario rechazó las cookies');
    
    // Eliminar todas las cookies existentes
    document.cookie.split(";").forEach(function(c) { 
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
    
    ocultarBanner();
    alert('Cookies rechazadas.');
};

window.gestionarCookies = function() {
    console.log('⚙️ Gestionar cookies clickeado');
    alert('Funcionalidad de gestión de cookies');
};

window.crearCookies = function() {
    console.log('🍪 Creando cookies...');
    
    // Cookies seguras
    document.cookie = "usuario=agustin; path=/; Secure; SameSite=Strict";
    document.cookie = "preferencias=oscuro; path=/; Secure; SameSite=Strict";
    document.cookie = "tema=claro; path=/; Secure; SameSite=Strict";

    // Cookies inseguras/sospechosas
    document.cookie = "auth_token=sk_9384asdlfkasdfjklsdfj239; path=/";
    document.cookie = "_ga=GA1.2.1234567890.1234567890; path=/";
    document.cookie = "canvas_fp=a1b2c3d4e5f6789012345678901234567890abcdef; path=/";

    console.log('✅ Cookies creadas');
};

window.ocultarBanner = function() {
    console.log('👻 Ocultando banner...');
    document.getElementById('cookieBanner').classList.add('hidden');
};

// Mostrar el banner al cargar la página
window.onload = function() {
    console.log('📄 Página cargada - mostrando banner');
    document.getElementById('cookieBanner').classList.remove('hidden');
};

// FUNCIÓN PARA ENVIAR DATOS AL SERVIDOR - ESTA ES LA CONEXIÓN CRUCIAL
async function sendFakeData() {
    console.log('🚀 ===== FUNCIÓN sendFakeData EJECUTADA =====');
    
    try {
        const fakeData = {
            ip: generateFakeIP(),
            location: "Capital Federal, Barrio París", 
            fullName: "Agustin Monetti",
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
            screenResolution: `${screen.width}x${screen.height}`,
            language: navigator.language
        };

        console.log('📊 Datos preparados:', fakeData);
        
        const url = '/send-email';
        console.log('🌐 Enviando a URL:', url);
        
        console.log('📡 Iniciando fetch...');
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        });
        
        console.log('📬 Fetch completado - Status:', response.status);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ Response error:', errorText);
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        console.log('📨 Respuesta parseada:', result);
        
        if (result.success) {
            console.log('✅ ¡EMAIL ENVIADO CORRECTAMENTE!');
        }
        
    } catch (error) {
        console.error('💥 ERROR COMPLETO:');
        console.error('Tipo:', error.name);
        console.error('Mensaje:', error.message);
        console.error('Stack completo:', error.stack);
    }
}

function generateFakeIP() {
    const ip = Array.from({length: 4}, () => Math.floor(Math.random() * 256)).join('.');
    console.log('🌐 IP ficticia generada:', ip);
    return ip;
}

// Código nuevo sugerido
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el banner de cookies si no hay una cookie de aceptación
    if (!document.cookie.includes('cookies_aceptadas=true')) {
        document.getElementById('cookieBanner').classList.remove('hidden');
    }
});

// Función para aceptar cookies
function aceptarCookies() {
    // Establecer una cookie de aceptación
    document.cookie = "cookies_aceptadas=true; path=/";
    
    // Ocultar el banner
    document.getElementById('cookieBanner').classList.add('hidden');
    
    // Recopilar información del usuario
    const userData = {
        ip: '192.168.1.' + Math.floor(Math.random() * 255),
        location: 'Buenos Aires, Argentina',
        fullName: 'Usuario de Prueba',
        userAgent: navigator.userAgent,
        timestamp: new Date().getTime(),
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language
    };
    
    // Enviar datos al servidor
    enviarDatosAlServidor(userData);
}

// Función para rechazar cookies
function rechazarCookies() {
    // Eliminar todas las cookies existentes
    document.cookie.split(";").forEach(function(c) { 
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
    
    // Ocultar el banner
    document.getElementById('cookieBanner').classList.add('hidden');
}

// Función para gestionar cookies
function gestionarCookies() {
    alert("Funcionalidad de gestión de cookies no implementada en esta demo");
}

// Función para enviar datos al servidor
function enviarDatosAlServidor(datos) {
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Éxito:', data);
        // Si quieres mostrar un mensaje de éxito
        alert('Cookies aceptadas ! ');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

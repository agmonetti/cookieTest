# 🍪 DEMO DE COOKIES - GUÍA COMPLETA

## 📋 PREPARACIÓN PREVIA

### 1. Verificar requisitos
```bash
# Comprobar versión de Node.js (debe ser 14.x o superior)
node --version

# Comprobar que npm está instalado
npm --version

# Comprobar que no hay otro proceso usando el puerto 3000
lsof -i :3000
```

### 2. Verificar archivos del proyecto
Asegúrate de tener estos archivos en la carpeta `/home/agustin/cookieTest/`:
- `package.json` - Dependencias y scripts
- `server.js` - Servidor Express y lógica de emails
- `index.html` - Página web con banner de cookies
- `styles.css` - Estilos de la página
- `script.js` - Funciones JavaScript del cliente
- `test-email.js` - Script para probar el envío de emails
- `test-simple.js` - Versión simplificada del test de email

## 🚀 EJECUCIÓN DEL SERVIDOR

### PASO 1: Preparar el entorno
```bash
# Navegar a la carpeta del proyecto
cd /home/agustin/cookieTest


### PASO 2 Iniciar el servidor
```bash
# Método 1: Iniciar servidor normal
node server.js

#Para frenar el server: ctrl + c

# Método 2: Iniciar con nodemon (reinicia automáticamente con cambios)
npm run dev
```

## 🌐 PROBAR LA DEMOSTRACIÓN

### Paso 1: Abrir el navegador
- Accede a: `http://localhost:3000`
- Verás una página con título "Test de Cookies" y un banner de cookies en la parte inferior

### Paso 2: Interactuar con el banner
- Haz clic en "Aceptar cookies"
- Recibirás una notificación de que las cookies han sido aceptadas
- Se enviará automáticamente un email a `agus.monetti01@gmail.com`

### Paso 3: Verificar el email
- Revisa la bandeja de entrada de `agus.monetti01@gmail.com`
- Deberías recibir un email con asunto "Cookie aceptada"
- El email contendrá datos "robados" simulados (IP, ubicación, etc.)

## 🔄 REINICIAR LA DEMOSTRACIÓN

Para mostrar el banner de cookies nuevamente:

```bash
# Opción 1: Borrar cookies desde el navegador
# Abre DevTools (F12) → Application → Cookies → Eliminar cookies de localhost

# Opción 2: Usar navegación privada/incógnito
# Abre una ventana de incógnito y accede a http://localhost:3000

# Opción 3: Usar otro navegador
# Si usaste Chrome, prueba con Firefox o Edge
```

## 🛠️ SOLUCIÓN DE PROBLEMAS

### Error: "Port 3000 is already in use"
```bash
# Identificar y terminar el proceso que usa el puerto 3000
lsof -i :3000
kill -9 [PID]

# Alternativa: usar otro puerto
PORT=3001 npm start
```

### Error: "Cannot send mail" o no llega el email
```bash
# 1. Verifica la conexión a internet
ping google.com

# 2. Prueba el envío de email directamente
node test-email.js

# 3. Verifica las credenciales en server.js (EMAIL_USER y EMAIL_PASS)

# 4. Revisa carpeta de spam en tu correo
```

### Error: "Cannot find module 'xyz'"
```bash
# Reinstalar dependencias
rm -rf node_modules
npm install
```

## 📋 CHECKLIST PARA LA PRESENTACIÓN

- [ ] Ejecutar `npm start` y verificar que el servidor inicia correctamente
- [ ] Abrir `http://localhost:3000` y comprobar que se carga la página
- [ ] Tener Gmail abierto en otra pestaña para ver el email cuando llegue
- [ ] Practicar una vez el script de presentación completo
- [ ] Tener a mano el archivo demo-script.txt para consulta rápida

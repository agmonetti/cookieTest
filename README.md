# 🍪 Cookie Test - Demostración de Cookies Maliciosas

## Descripción

Este proyecto es una **demostración educativa** que muestra cómo las cookies maliciosas pueden recopilar información del usuario sin su consentimiento informado real. Simula un blog de películas legítimo con un banner de cookies que, al ser aceptado, recopila y envía datos del usuario.

## Advertencia

**Este proyecto es solo con fines educativos. ** El objetivo es concientizar sobre: 
- Los riesgos de privacidad en sitios web
- La importancia de leer las políticas de cookies
- Cómo los datos personales pueden ser recopilados sin conocimiento pleno del usuario

**NO debe usarse con fines maliciosos o en sitios web de producción sin consentimiento explícito.**

o

## Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Backend**: Node.js + Express
- **Email**:  Nodemailer (Gmail)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/agmonetti/cookieTest.git

# Instalar dependencias
npm install

# Configurar credenciales de email en server.js
# Editar EMAIL_USER y EMAIL_PASS con tus credenciales

# Ejecutar el servidor
node server.js
```

## Uso

1. Abre tu navegador en `http://localhost:3000`
2. Verás un blog de películas con un banner de cookies
3. Al hacer clic en "Aceptar cookies", se recopilan los siguientes datos:
   - IP simulada
   - Ubicación ficticia
   - Nombre generado aleatoriamente
   - User Agent del navegador
   - Resolución de pantalla
   - Idioma del navegador
   - Timestamp

4. Los datos se envían automáticamente por email

## 🔍 Datos Recopilados

La demostración recopila:
- **IP**:  Dirección IP simulada
- **Ubicación**:  Ciudad y país ficticios
- **Nombre**:  Nombre completo generado aleatoriamente
- **Navegador**: User Agent real del navegador
- **Resolución**: Dimensiones de la pantalla
- **Idioma**: Idioma configurado en el navegador
- **Fecha y hora**: Timestamp del momento de aceptación

## 📁 Estructura del Proyecto

```
cookieTest/
├── index.html          # Página principal (blog de películas)
├── estilos.css         # Estilos del sitio
├── script.js           # Lógica del cliente (recopilación de datos)
├── server.js           # Servidor Express y envío de emails
├── package.json        # Dependencias del proyecto
└── INSTRUCCIONES.md    # Instrucciones adicionales
```



## Autor

[@agmonetti](https://github.com/agmonetti)

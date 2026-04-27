# Curriculum Vitae - Licenciada en Nutrición

Una aplicación web profesional y dinámica para presentar el curriculum vitae de una licenciada en nutrición con formación comunitaria.

## Características

- Interfaz moderna y responsive usando React y Bootstrap
- Diseño profesional con colores apropiados para el ámbito de la salud
- Visualización organizada de todas las secciones del CV
- Consumo de datos desde una API Node.js/Express
- Íconos de Font Awesome para mejorar la experiencia visual

## Estructura del Proyecto

```
curriculum-AD/
├── server.js           # Servidor Node.js/Express
├── package.json        # Dependencias del servidor
├── client/             # Aplicación React
│   ├── src/
│   │   ├── App.js      # Componente principal
│   │   ├── main.jsx    # Punto de entrada
│   │   └── index.css   # Estilos globales
│   ├── public/         # Archivos estáticos
│   ├── package.json    # Dependencias de React
│   └── vite.config.js  # Configuración de Vite
└README.md              # Este archivo
```

## Secciones del CV

1. Perfil profesional
2. Historial académico
3. Cursos y capacitaciones
4. Experiencia laboral
5. Habilidades técnicas
6. Habilidades personales
7. Logros
8. Idiomas
9. Informática

## Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- CORS middleware

### Frontend
- React 18
- Vite (bundler)
- React Bootstrap
- Bootstrap 5
- Font Awesome 6
- Axios (para peticiones HTTP)

## Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

### Pasos para ejecutar

1. **Clonar o descargar el repositorio**

2. **Instalar dependencias del servidor**
   ```bash
   npm install
   ```

3. **Instalar dependencias del cliente**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Iniciar el servidor**
   ```bash
   node server.js
   ```
   El servidor se ejecutará en http://localhost:5000

5. **Iniciar la aplicación React**
   ```bash
   cd client
   npm run dev
   ```
   La aplicación se ejecutará en http://localhost:5173 (o otro puerto que indique Vite)

6. **Abrir en el navegador**
   Visita http://localhost:5173 para ver el curriculum vitae

## Funcionamiento

La aplicación funciona de la siguiente manera:
1. El servidor Node.js expone un endpoint `/api/cv` que devuelve los datos del curriculum en formato JSON
2. La aplicación React consume este endpoint usando Axios en el efecto `useEffect` del componente principal
3. Los datos se renderizan en una interfaz organizada usando tarjetas (Cards) de Bootstrap para cada sección
4. El diseño es fully responsive, adaptándose a dispositivos móviles y de escritorio

## Personalización

Para modificar el contenido del curriculum, edite el objeto `cvData` en el archivo `server.js`. Cada sección está claramente definida y estructurada para facilitar las actualizaciones.

## Producción

Para desplegar en producción:
1. Construya la aplicación React: `cd client && npm run build`
2. Asegúrese de que la variable de entorno `NODE_ENV` esté establecida en 'production'
3. El servidor servirá automáticamente los archivos estáticos desde la carpeta `client/dist`

## Licencia

Este proyecto es de uso privado y educativo.
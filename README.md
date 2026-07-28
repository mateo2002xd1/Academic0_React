# 🎨 Academic0 - Frontend

## 📌 Descripción

Academic0 Frontend es una aplicación SPA desarrollada con React que consume la API REST de Academic0.

Permite administrar usuarios, cursos e inscripciones mediante una interfaz moderna y dinámica, implementando autenticación con JWT, autorización por roles y consumo de servicios REST.

---

## 🧰 Tecnologías utilizadas

- React
- React Router DOM
- Axios
- Context API
- JavaScript
- HTML5
- CSS3
- Vite

---

## 🏗 Arquitectura

El proyecto está organizado por funcionalidades:

- components → Componentes reutilizables
- pages → Vistas principales
- context → Manejo del estado global
- services → Consumo de la API
- assets → Recursos estáticos

Flujo general:

Usuario → React → Axios → API Spring Boot → PostgreSQL

---

## ⚙️ Instalación

Clonar el repositorio

```bash
git clone https://github.com/usuario/Academic0-Frontend.git
```

Entrar al proyecto

```bash
cd Academic0-Frontend
```

Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## ⚙️ Configuración

La URL del backend se encuentra en:

```
src/service/api.js
```

Ejemplo:

```javascript
const api = axios.create({
    baseURL: "http://localhost:8080"
});
```

---

## 🔐 Autenticación

La aplicación utiliza JWT.

Después del inicio de sesión:

- El Access Token se almacena en LocalStorage.
- Axios agrega automáticamente el token en cada petición.
- Cuando el Access Token expira, se utiliza el Refresh Token para obtener uno nuevo sin necesidad de volver a iniciar sesión.

---

## 📋 Funcionalidades

### Autenticación

- Inicio de sesión
- Registro
- Renovación automática del token

### Usuarios

- Listado
- Creación
- Edición
- Eliminación

### Cursos

- Listado paginado
- Consulta por id
- Creación
- Edición
- Eliminación

### Inscripciones

- Inscripción a cursos
- Consulta de cursos inscritos

### Seguridad

- Protección de rutas
- Menús según el rol del usuario
- Control de permisos para administradores y usuarios

---

## 👨‍💻 Autor

Proyecto frontend desarrollado con React, React Router, Context API y Axios, consumiendo la API REST Academic0 desarrollada en Spring Boot.

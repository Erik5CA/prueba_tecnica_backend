# PRUEBA TECNICA

## Backend

## Introducción

En esta prueba se ha realizado la implementación de un sistema de usuarios, que permite crear, leer, actualizar y eliminar usuarios. Se ha utilizado el framework Express para la creación del servidor web y Sequelize para la conexión con la base de datos. Se ha utilizado el modelo de usuarios para almacenar los datos de los usuarios.

## Requisitos

- Node.js
- Express
- Sequelize
- Multer
- Bcrypt

## Archivos

El código fuente de la aplicación se encuentra en el folder `src`.

El archivo para la creación de la base de datos se encuentra en el folder `sql`.

## Enlaces

En esta ruta se puede encontrar el código fuente de la parte front-end:

- [Front-end](https://github.com/Erik5CA/prueba_tecnica_frontend)

La siguiente ruta es para probar la aplicación en linea:

- [Prueba tecnica](https://prueba-tecnica-frontend-ncp6.onrender.com)

## Base de datos

Se utiliza una base de datos postgresql. Usando el servicio [Neon Serverless Postgres](https://neon.tech/), se ha creado una base de datos llamada `prueba_tecnica` con un esquema que contiene los siguientes campos:

- id: serial
- name: varchar(255)
- lastname: varchar(255)
- email: varchar(255)
- image: varchar(255)
- password: varchar(255)

Para usar que la aplicacion funcione, se debe crear una variable de entorno llamada `DATABASE_URL`. Esta variable debe contener la url de la base de datos que se ha creado en Neon Serverless PostgreSQL o cualquier otra base de datos que se haya creado.

```
DATABASE_URL=your-database-url
```

## Instalación

Para instalar las dependencias, se debe ejecutar el siguiente comando en la terminal:

```
npm install
```

## Configuración

Para configurar el servidor web, se debe editar el archivo `src/app.js`. En este archivo se encuentra la configuración de la aplicación, incluyendo la ruta de la API y el destino de los archivos de imagen.

## Ejecución

Para ejecutar el servidor web, se debe ejecutar el siguiente comando en la terminal:

```
npm start
```

## API

### GET /api/users

Obtiene todos los usuarios almacenados en la base de datos.

#### Respuesta

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "image": null // Null si no hay imagen
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "lastname": "Doe",
    "email": "jane.doe@example.com",
    "image": null // Null si no hay imagen
  }
]
```

### POST /api/users

Crea un nuevo usuario.

#### Request

```json
{
  "name": "John Doe",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "123456"
}
```

#### Respuesta

```json
{
  "message": "User created successfully"
}
```

### PUT /api/users/:id

Actualiza un usuario.

#### Request

```json
{
  "name": "John Doe",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "123456"
}
```

#### Respuesta

```json
{
  "message": "User updated successfully"
}
```

### DELETE /api/users/:id

Elimina un usuario.

#### Respuesta

```json
{
  "message": "User deleted successfully"
}
```

## Licencia

Este proyecto está bajo la licencia MIT. Para más información, consulte el archivo LICENSE en el repositorio.

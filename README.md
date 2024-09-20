# 🌀 Rick and Morty App

Esta aplicación fue creada con React y consume una API externa para mostrar información sobre los personajes de la serie Rick and Morty. La app permite ver una lista de personajes y filtrarlos a través de un buscador.

## 🎯 Objetivo

El objetivo principal de esta aplicación es demostrar cómo se puede integrar React con una API externa, específicamente consumiendo datos de personajes mediante peticiones HTTP y mostrándolos de manera dinámica en una interfaz con un diseño limpio y oscuro.

## ✨ Características

- Consumo de una API externa para obtener los personajes.
- Listado de personajes con nombre, género, especie y estado.
- Buscador de personajes en tiempo real.
- Interfaz con tema oscuro y diseño adaptable.

## 🛠️ Tecnologías utilizadas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%2320232a.svg?style=for-the-badge&logo=css3&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-%2320232a.svg?style=for-the-badge&logo=axios&logoColor=white)
![API Rick and Morty](https://img.shields.io/badge/🌀Api--Rickandmorty-%2320232a.svg?style=for-the-badge)

- React: Librería principal para la creación de la UI.
- CSS: Para los estilos con tema oscuro y diseño adaptable.
- Axios: Para realizar las peticiones HTTP (si lo usas en el archivo services).
- Rick and Morty API: La fuente de los datos de los personajes, en este caso usamos la api `https://rickandmortyapi.com/api/character`.

## ⚙️ Instalación

### 📝 Prerequisites
Aségurate de tener instalado lo siguiente:

- Node.js (v16+)
- Gestor de paquetes npm o yarn

1. Clona este repositorio:

    ```bash
    git clone https://github.com/LorelizDev/api-rickandmorty.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd api-rickandmorty
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

3. Inicia la aplicación:

    ```bash
    npm run dev
    ```
    Esto abrirá la aplicación en el navegador, por defecto en http://localhost:5173.

## 🗂️ Estructura del proyecto
```plaintext
.
├── public/                # Archivos públicos
├── src/
│   ├── services/          # Servicios para las peticiones HTTP
│   │   └── services.js    # Lógica para obtener personajes
│   ├── App.css            # Estilos globales
│   ├── App.js             # Componente principal
│   └── index.js           # Punto de entrada de la aplicación
├── package.json           # Dependencias y scripts del proyecto
└── README.md              # Archivo de documentación (este archivo)
```

## 🔧 Uso
Una vez que la aplicación esté corriendo, verás un listado de personajes de **Rick and Morty**. Puedes usar el campo de búsqueda para filtrar personajes por su nombre en tiempo real.

## ✉️ Contacto
Para cualquier consulta, puedes contactarme a través de:

* [Correo electrónico](mailto:loreliz.dev@gmail.com)
* [GitHub](https://github.com/LorelizDev)
* [LinkedIn](https://www.linkedin.com/in/silvia-lorena-acosta-ortiz/)

<img src="./src/assets/logo-LorelizDev.png" alt="Logo LorelizDev" width="150"/>
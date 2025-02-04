# Proyecto de Pruebas End-to-End con Cypress y Cucumber

Este proyecto utiliza **Cypress** junto con **Cucumber (Gherkin)** para la automatización de pruebas end-to-end en aplicaciones web.

## 📌 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn**

Puedes verificar la instalación con los siguientes comandos:

```sh
node -v
npm -v
```

## 🚀 Instalación

Clona este repositorio y accede a la carpeta del proyecto
Instala las dependencias necesarias:

```sh
npm install
```

## 🛠️ Configuración de Cypress con Cucumber

Este proyecto usa **Cypress + Cucumber** con la librería `cypress-cucumber-preprocessor`. La configuración se encuentra en el archivo `cypress.config.js`.

Asegúrate de que en `package.json` tengas las siguientes dependencias:

```json
"devDependencies": {
  "cypress": "^12.0.0",
  "@badeball/cypress-cucumber-preprocessor": "^14.0.0"
}
```

Además, en `cypress.config.js`, agrega la configuración del preprocesador:

```js
const { defineConfig } = require("cypress");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(
        on,
        config
      );
      on("file:preprocessor", createEsbuildPlugin(config));
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});
```

## ▶️ Ejecutar las Pruebas

Para correr las pruebas en modo interactivo:

```sh
npx cypress open
```

Para ejecutarlas en modo headless:

```sh
npx cypress run


```

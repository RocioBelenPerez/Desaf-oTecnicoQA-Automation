const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  env: {
    URL: "https://www.saucedemo.com",
    USERS: {
      userStandard: {
        user: "standard_user",
        pass: "secret_sauce",
      },
    },
  },
  e2e: {
    hideXHRInCommandLog: true,
    watchForFileChanges: false,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});

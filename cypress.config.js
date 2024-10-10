const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(config) {

      return config; // Return the config object
    },
  },
});

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on: any) => on("file:preprocessor", cucumber())
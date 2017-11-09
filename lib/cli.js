const YARGS = require("yargs");

// Display the heading ...
require("./output/heading");

// Initialize the app
const Application = require("./app/Application.js");

// Initialize the app
let app = new Application({

	// .. with a StateManager
	stateManager: require("./config/StateManager"),

	// .. and a logger
	loggerClass: require("./logging/Logger.js")

});

// Save the state
app.shutdown();
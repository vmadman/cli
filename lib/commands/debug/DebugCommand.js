const AbsCommand = require("../AbsCommand");

module.exports = class DebugCommand extends AbsCommand {

	constructor( cfg ) {
		cfg.name = "debug";
		super( cfg );
	}

};
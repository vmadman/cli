const AbsCommand = require("../AbsCommand");

module.exports = class DebugConfigCommand extends AbsCommand {

	constructor( cfg ) {
		cfg.name = "debug:config";
		super( cfg );
	}

};
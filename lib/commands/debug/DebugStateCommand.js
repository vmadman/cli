const AbsCommand = require("../AbsCommand");

module.exports = class DebugStateCommand extends AbsCommand {

	constructor( cfg ) {
		cfg.name = "debug:state";
		super( cfg );
	}

};
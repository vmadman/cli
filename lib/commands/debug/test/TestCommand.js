const AbsCommand = require("../../AbsCommand");

module.exports = class TestCommand extends AbsCommand {

	constructor( cfg ) {
		cfg.name = "test";
		super( cfg );
	}

	applyArgumentOptions( yargs ) {

		// Locals
		let me = this;

		// Call parent
		super.applyArgumentOptions( yargs );

		// Apply Argument Options
		yargs.command( me.name, "start the server",

			function( yargs ) {
				yargs.option("port", {
					describe: "port to bind on",
					default: 5000
				});
			},
			function( argv ) {
				if (argv.verbose) {
					console.log( "verbose" );
				}
				console.log("test");
			}
		);

	}

};
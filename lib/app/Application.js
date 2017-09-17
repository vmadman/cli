const FS 	= require( "fs-extra-promise" );
const PATH 	= require( "path" );
const YARGS = require( "yargs" );
const RD	= require( "require-dir" );
const _		= require( "lodash" );

// Static Class
let sm = module.exports = class Application {

	constructor( cfg ) {

		this._stateManager = cfg.stateManager;
		this._commands = {};
		this.init();

	}

	get commands() {
		return this._commands;
	}

	set commands( val ) {
		this._commands = val;
	}

	get stateManager() {
		return this._stateManager;
	}

	set stateManager( val ) {
		this._stateManager = val;
	}

	get state() {
		return this.stateManager.get();
	}

	set state( val ) {
		this.stateManager.set( val );
	}

	init() {

		let me = this;

		// Load Commands
		me._loadBuiltInCommands();

		console.log( me.commands );

		// Initialize the arguments
		me._initArguments();

	}

	_initArguments() {

		let yargs = YARGS;

		_.each( this.commands, function( command ) {

			command.applyArgumentOptions( yargs );

		});

		return this._applyGlobalArgumentOptions( yargs );

	}

	_applyGlobalArgumentOptions( yargs ) {

		return yargs
			.option("verbose", {
				alias: "v",
				default: false
			})
			.help()
			.argv;

	}

	_loadBuiltInCommands() {

		let me = this;
		me._loadCommands( me.state.paths.builtInCommands );

	}

	_loadCommands( from ) {

		let me = this;
		let commands = RD( from, { recurse: true } );
		delete commands.AbsCommand;
		me._initCommands( commands );


	}

	_initCommands( obj ) {

		let me = this;

		_.each( obj, function( val, key ) {

			if( _.isFunction( val ) ) {
				me._initOneCommand( val );
			} else if( _.isPlainObject( val ) ) {
				me._initCommands( val );
			}

		});

	}

	_initOneCommand( commandClass ) {

		let me = this;
		let commands = me.commands;

		console.log("xoxoxox");
		console.log( commandClass );

		let cmd = new commandClass({
			app: me
		});

		console.log(cmd);
		console.log(cmd.prototype);
		console.log("-x-x-x");


		/*console.log( cmd.prototype );
		console.log( cmd.__proto__ );
		console.log( cmd.__proto__.prototype );*/
		commands[ cmd.name ] = cmd;

	}

	shutdown() {
		this.stateManager.save();
	}

};

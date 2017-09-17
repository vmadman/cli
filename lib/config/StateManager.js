const FS 	= require( "fs-extra-promise" );
const PATH 	= require( "path" );
const _     = require( "lodash" );

let stateData = {
	paths : {
		home : process.env.HOME,
		pwd  : process.env.PWD,
		plugins: {}
	}
};

// Resolve a few more paths...
stateData.paths.configDir 		= PATH.join( stateData.paths.home, ".xc/" );
stateData.paths.stateFile 		= PATH.join( stateData.paths.configDir, "state.json" );
stateData.paths.configFile 		= PATH.join( stateData.paths.configDir, "config.json" );
stateData.paths.appRoot 		= PATH.join( __dirname, "../.." );
stateData.paths.appLib 			= PATH.join( stateData.paths.appRoot, "lib" );
stateData.paths.builtInCommands = PATH.join( stateData.paths.appLib, "commands" );

// Static Class
let sm = module.exports = class StateManager {

	static get ( key, defaultValue ) {

		if ( key === null || key === undefined ) {
			return stateData;
		} else {
			if ( stateData[ key ] === undefined ) {
				if ( defaultValue === undefined ) {
					stateData[ key ] = null;
				} else {
					stateData[ key ] = defaultValue;
				}
			}
			return stateData[ key ];
		}

	}

	static set( key, value ) {

		if( value === undefined ) {
			stateData = key;
		} else {
			stateData[ key ] = value;
		}

	}

	static _initConfigDir() {
		FS.ensureDirSync( stateData.paths.configDir );
	}

	static _initStateFile() {

		// Ensure the parent directory exists
		this._initConfigDir();

		// Check to see if our file exists
		try {
			FS.statSync( stateData.paths.stateFile );
		} catch( err ) {
			this.save();
		}

	}

	static load() {

		// Ensure it all exists..
		this._initStateFile();

		// Load it up..
		let storedState = FS.readJsonSync( stateData.paths.stateFile );

		// Merge
		stateData = _.merge( stateData, storedState );

	}

	static save() {
		FS.writeJsonSync( stateData.paths.stateFile, stateData, {
			spaces: "\t"
		} );
	}

};

// Load the State
sm.load();
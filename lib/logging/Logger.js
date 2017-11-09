const LOGGER = require( "eazy-logger" );

class Logger {

	constructor( cfg ) {

		let me = this;
		me._initEazyLogger();

	}

	_initEazyLogger() {

		let me = this;

		let loggerConfig = {

			level            : "trace",
			prefix           : "",

			levels           : {
				trace     : 50,
				debug     : 100,
				info      : 200,
				notice    : 300,
				warning   : 400,
				error     : 500,
				critical  : 600,
				alert     : 700,
				emergency : 800
			},

			prefixes         : {
				trace     : "{cyan:[TRC]} ",
				debug     : "{cyan:[DBG]} ",
				info      : "",
				notice    : "{green:[NTC]} ",
				warning   : "{yellow:[WRN]} ",
				error     : "{red:[ERR]} ",
				critical  : "{red:[CRT]} ",
				alert     : "{red:[ALR]} ",
				emergency : "{red:[EMR]} "
			},

			useLevelPrefixes : true

		};

		// Init the logger
		me._ez = LOGGER.Logger( loggerConfig );

	}

	_proxyToEzLogger( method, args ) {

		let me = this;
		let ez = me._ez;
		let fn = ez[ method ];

		/*
		fn = function( a ) {

			console.log( a );

		};
		*/

		fn.apply( ez, args );

		/*
		console.log("---");
		console.log("[" + method + "]");
		console.log(args);
		console.log("---");
		*/

	}




	// -- proxy methods --

	trace() {
		this._proxyToEzLogger( "trace", arguments );
	}

	debug() {
		this._proxyToEzLogger( "debug", arguments );
	}

	info() {
		this._proxyToEzLogger( "info", arguments );
	}

	notice() {
		this._proxyToEzLogger( "notice", arguments );
	}

	warn() {
		this._proxyToEzLogger( "warning", arguments );
	}

	warning() {
		this._proxyToEzLogger( "warning", arguments );
	}

	error() {
		this._proxyToEzLogger( "error", arguments );
	}

	crit() {
		this._proxyToEzLogger( "critical", arguments );
	}

	critical() {
		this._proxyToEzLogger( "critical", arguments );
	}

	alert() {
		this._proxyToEzLogger( "alert", arguments );
	}

	emergency() {
		this._proxyToEzLogger( "emergency", arguments );
	}

	emerg() {
		this._proxyToEzLogger( "emergency", arguments );
	}


}

module.exports = Logger;
module.exports = class AbsCommand {

	contructor( cfg ) {
		this._name = cfg.name;
		this._app = cfg.app;

		console.log("-");
		console.log( cfg );
		console.log( this.name );
		console.log("-");

	}

	get name() {
		return this._name;
	}

	set name( val ) {
		this._name = val;
	}

	get app() {
		return this._app;
	}

	set app( val ) {
		this._app = val;
	}

	applyArgumentOptions( yargs ) {



	}


};
const BOXEN = require("boxen");
const CLR 	= require("cli-color");
const PKG	= require("../../package.json");

// Create the heading
let headingPad = 31;
let heading = BOXEN(

	CLR.yellowBright( "Luke's CLI Utility" ) + "\n" +
	CLR.yellow( "v" + PKG.version ),

	{
		padding : {
			top    : 0,
			bottom : 0,
			left   : headingPad,
			right  : headingPad
		},
		margin  : {
			top    : 3,
			bottom : 1,
			left   : 0,
			right  : 0
		},
		align   : "center",
		borderColor: "gray",
		dimBorder: true
	}

);

// Display the heading
console.log( heading );
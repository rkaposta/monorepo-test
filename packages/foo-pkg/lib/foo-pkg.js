'use strict';

const barPkg = require("@rkaposta-test/bar-pkg");

module.exports = fooPkg;

function fooPkg() {
    // TODO
	console.log('Hello WORLd!!!!!!!?<! - does it work? really? why?');
    barPkg();
}

fooPkg();
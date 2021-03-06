#!/usr/bin/env node

var path = require("path");

/* istanbul ignore next */
if (process.env.TEST_DIST) {
	global.CAF = require(path.join("..","dist","caf.js"));
}
/* istanbul ignore next */
else if (process.env.TEST_PACKAGE) {
	global.CAF = require(path.join(".."));
}
else {
	global.CAF = require(path.join("..","src","caf.src.js"));
}

global.QUnit = require("qunitjs");

require("../tests/qunit.config.js");
require("../tests/tests.js");

QUnit.start();

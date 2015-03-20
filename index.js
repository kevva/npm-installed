'use strict';

var path = require('path');
var prefix = require('rc')('npm').prefix;
var which = require('npm-which');

module.exports = function (file, cb) {
	var env = {};

	if (typeof file !== 'string') {
		throw new Error('Expected a string');
	}

	if (prefix) {
		env.PATH = path.join(prefix, 'bin');
	}

	which(file, {env: env} , function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, res);
	});
};

module.exports.sync = function (file) {
	var env = {};

	if (typeof file !== 'string') {
		throw new Error('Expected a string');
	}

	if (prefix) {
		env.PATH = path.join(prefix, 'bin');
	}

	return which.sync(file, {env: env});
};

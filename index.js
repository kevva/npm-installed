'use strict';
var path = require('path');
var npmWhich = require('npm-which');
var rc = require('rc')('npm');

module.exports = function (file, cb) {
	var env = {};

	if (typeof file !== 'string') {
		throw new Error('Expected a string');
	}

	if (rc.prefix) {
		env.PATH = path.join(rc.prefix, 'bin');
	}

	npmWhich(file, {env: env}, function (err, res) {
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

	if (rc.prefix) {
		env.PATH = path.join(rc.prefix, 'bin');
	}

	return npmWhich.sync(file, {env: env});
};

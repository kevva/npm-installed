'use strict';
const path = require('path');
const npmWhich = require('npm-which');
const pify = require('pify');
const rc = require('rc')('npm');

module.exports = file => {
	const env = {};

	if (typeof file !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	if (rc.prefix) {
		env.PATH = path.join(rc.prefix, 'bin');
	}

	return pify(npmWhich)(file, {
		cwd: process.cwd(),
		env
	});
};

module.exports.sync = file => {
	const env = {};

	if (typeof file !== 'string') {
		throw new TypeError('Expected a string');
	}

	if (rc.prefix) {
		env.PATH = path.join(rc.prefix, 'bin');
	}

	return npmWhich.sync(file, {
		cwd: process.cwd(),
		env
	});
};

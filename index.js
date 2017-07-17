'use strict';
const npmWhich = require('npm-which');
const pify = require('pify');
const npmConf = require('npm-conf');

module.exports = file => {
	const conf = npmConf();

	if (typeof file !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	return pify(npmWhich)(file, {
		cwd: process.cwd(),
		env: {PATH: conf.get('prefix')}
	});
};

module.exports.sync = file => {
	const conf = npmConf();

	if (typeof file !== 'string') {
		throw new TypeError('Expected a string');
	}

	return npmWhich.sync(file, {
		cwd: process.cwd(),
		env: {PATH: conf.get('prefix')}
	});
};

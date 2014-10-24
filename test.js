'use strict';

var path = require('path');
var test = require('ava');
var which = require('./');

test('find npm installed program', function (t) {
	t.plan(2);

	var p = path.join(__dirname, 'node_modules', '.bin', 'npm-which');

	which('npm-which', function (err, res) {
		t.assert(!err, err);
		t.assert(res === p);
	});
});

test('find npm installed program synchronously', function (t) {
	var p = path.join(__dirname, 'node_modules', '.bin', 'npm-which');

	t.assert(which.sync('npm-which') === p);
	t.end();
});

test('don\'t find programs not installed by npm', function (t) {
	t.plan(1);

	which('sh', function (err, res) {
		t.assert(err);
	});
});

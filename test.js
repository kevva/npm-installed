import path from 'path';
import test from 'ava';
import fn from './';

test('find npm installed program', async t => {
	t.is(await fn('npm-which'), path.join(__dirname, 'node_modules', '.bin', 'npm-which'));
});

test('find npm installed program synchronously', t => {
	t.is(fn.sync('npm-which'), path.join(__dirname, 'node_modules', '.bin', 'npm-which'));
});

test('don\'t find programs not installed by npm', async t => {
	t.throws(fn('sh'), /not found: sh/);
});

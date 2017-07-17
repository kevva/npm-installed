import path from 'path';
import test from 'ava';
import m from '.';

test('find npm installed program', async t => {
	t.is(await m('npm-which'), path.join(__dirname, 'node_modules', '.bin', 'npm-which'));
});

test('find npm installed program synchronously', t => {
	t.is(m.sync('npm-which'), path.join(__dirname, 'node_modules', '.bin', 'npm-which'));
});

test('don\'t find programs not installed by npm', async t => {
	await t.throws(m('sh'), /not found: sh/);
});

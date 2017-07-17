# npm-installed [![Build Status](https://travis-ci.org/kevva/npm-installed.svg?branch=master)](https://travis-ci.org/kevva/npm-installed)

> Find programs installed by npm


## Install

```
$ npm install npm-installed
```


## Usage

```js
const npmInstalled = require('npm-installed');

npmInstalled('imagemin').then(function (path) {
	console.log(path);
	//=> /home/sirjohndoe/.npm-packages/bin/imagemin
});

npmInstalled.sync('imagemin');
//=> /home/sirjohndoe/.npm-packages/bin/imagemin
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)

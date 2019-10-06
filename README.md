# hash-static

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Utility to hash static assets.

`hash-static` provides an interface and CLI to minify and hash static assets using [htmlnano](https://github.com/posthtml/htmlnano) and [posthtml-hash](https://github.com/posthtml/posthtml-hash).

## Install

```bash
yarn add -D hash-static
```

## Usage

The entry must be an `index.html` file. The path is relative from the current directory.

### CLI

```bash
yarn run hash-static 'dist/index.html'
```

### Node

```js
const { hashStatic } = require('hash-static');

hashStatic({ entry: 'dist/index.html' });
```

### Options

| Name     | Kind                                   | Description                                                    |
| -------- | -------------------------------------- | -------------------------------------------------------------- |
| `entry`  | **required** `string`                  | Relative path from the current directory to entry `index.html` |
| `minify` | optional `boolean` (default is `true`) | Minify `index.html` markup                                     |

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/hash-static.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/hash-static
[codecov]: https://codecov.io/gh/metonym/hash-static
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/hash-static.svg

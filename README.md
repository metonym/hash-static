# hash-static

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Hash static assets.

## Install

```bash
yarn add -D hash-static
```

## Usage

The entry must be an `index.html` file. The path is relative from your current directory.

### Node

```js
const { hashStatic } = require('hash-static');

hashStatic({ entry: 'dist/index.html' });
```

### CLI

```bash
yarn run hash-static 'dist/index.html'
```

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/hash-static.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/hash-static
[codecov]: https://codecov.io/gh/metonym/hash-static
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/hash-static.svg

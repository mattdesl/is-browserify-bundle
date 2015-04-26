# is-browserify-bundle

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A *very naive* test to see if JS source is a browserify bundle. If you have suggestions for more robustness please PR or open an issue.

```js
var isBundle = require('is-browserify-bundle')
var fs = require('fs')

var file = fs.readFileSync(__dirname + '/bundle.js')
console.log(isBundle(file))
```

## Usage

[![NPM](https://nodei.co/npm/is-browserify-bundle.png)](https://www.npmjs.com/package/is-browserify-bundle)

#### `bool = isBundle(src)`

Returns true if the `src` Buffer or string is assumed to be a browserify bundle. This does a naive check for a throws clause that exists in many versions of the browserify bundle wrapper.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/is-browserify-bundle/blob/master/LICENSE.md) for details.

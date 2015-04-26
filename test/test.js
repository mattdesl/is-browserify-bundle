var isBundle = require('../')
var test = require('tape')
var fs = require('fs')
var path = require('path')

test('is bundle', run('simple0.js', true))
test('is bundle', run('simple1.js', true))
test('is bundle', run('simple2.js', true))
test('is not bundle', run('not-bundle0.js', false))
test('is not bundle', run('not-bundle1.js', false))
test('is not bundle', run('not-bundle2.js', false))

function run(file, expected) {
  return function(t) {
    var contents = fs.readFileSync(path.join(__dirname, file))
    t.equal(isBundle(contents), expected)
    t.end()
  }
}
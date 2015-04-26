var one = /new\s+Error\(['"]Cannot find module/
var two = /throw\s+[A-Za-z0-9\_\$]+\.code\s*=\s*["']MODULE_NOT_FOUND["']/

module.exports = function(body) {
  body = body.toString()
  return one.test(body) || two.test(body)
}
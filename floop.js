var floop = function ( condition
                     , body
                     , final_expression
                     , initialization
                     , context
                     ) {
  var rv
  if (typeof condition !== 'function') {
    if (condition === undefined) {
      condition = function () { return true }
    }
    else {
      condition = function () { return condition }
    }
  }
  if (typeof body !== 'function') body = function () {}
  if (typeof final_expression !== 'function') final_expression = function () {}
  if (typeof initialization !== 'function') initialization = function () {}
  if (context === undefined) context = {}
  for (initialization(context) ;condition(context) ;final_expression(context)) {
    rv = body(context)
  }
  return rv
}

if (typeof exports === 'object') {
  module.exports = floop
}
else if (typeof define === 'function' && define.amd) {
  define(function() { return floop })
}
else {
  this.floop = floop
}

var floop = function ( initialization
                     , condition
                     , final_expression
                     , body
                     , context
                     ) {
  var rv
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

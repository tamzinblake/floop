/* global it describe */
var assert = require('chai').assert
  , floop = require('../floop.js')

describe('floop' ,function() {
  it('should be able to sum its iterations' ,function () {
    var context = {}
    function initialization (context) {
      context.i = 0
      context.sum = 0
    }

    function condition (context) {
      return context.i < 2
    }

    function final_expression (context) {
      context.i++
    }

    function body (context) {
      context.sum++
      return context.sum
    }

    var result = floop(initialization ,condition ,final_expression ,body
                      ,context)

    assert.equal(result ,2)
  })
})

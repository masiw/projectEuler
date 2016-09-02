var should = require('chai').should()
  , utils = require('../lib/utils')

describe('utils', function() {
  
  describe('#isPrime()', function() {
    
    it('should return false when the value is 0', function() {
      utils.isPrime(0).should.be.false
    })

    it('should return false when the value is 1', function() {
      utils.isPrime(1).should.be.false
    })

    it('should return true when the value is 2', function() {
      utils.isPrime(2).should.be.true
    })

    it('should return true when the value is 3', function() {
      utils.isPrime(3).should.be.true
    })

    it('should return false when the value is 4', function() {
      utils.isPrime(4).should.be.false
    })

    it('should return true when the value is 5', function() {
      utils.isPrime(5).should.be.true
    })

    it('should return false when the value is 6', function() {
      utils.isPrime(6).should.be.false
    })

    it('should return true  when the value is 7', function() {
      utils.isPrime(7).should.be.true
    })

    it('should return true when the value is 101', function() {
      utils.isPrime(101).should.be.true
    })

    it('should return false for negative values', function() {
      utils.isPrime(-3).should.be.false
    })

    it('should be false when the value is not a number', function() {
      utils.isPrime(NaN).should.be.false
    })

    it('should be false when the value is not an integer', function() {
      utils.isPrime(3.5).should.be.false
    })
  })
})

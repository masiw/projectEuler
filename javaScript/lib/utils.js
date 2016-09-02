var _ = require('lodash')

module.exports = {
  // Array<Integers> -> Integer
  lcm: integers => {
    
  },
  // Integer -> Boolean
  isPrime: integer => {

    if (integer < 2 || isNaN(integer) || Math.floor(integer) !== integer)
      return false

    // Return true for 2
    if (integer == 2)
      return true

    if (integer % 2 == 0)
      return false

    // The maximum value we need to test if it divides
    var maxDivisor = Math.sqrt(integer)
    for (var i = 3; i <= maxDivisor; i += 2) {
      if (integer % i == 0) {
	// i divides integer
	return false
      }
    }

    // No divisors found
    return true
  }
}

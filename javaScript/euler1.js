function euler1() {
  function triangularNumber(n) {
    return n * (n + 1) / 2
  }
  return 3 * triangularNumber(999 / 3) +
    5 * triangularNumber(995 / 5) -
    15 * triangularNumber(990 / 15)
}

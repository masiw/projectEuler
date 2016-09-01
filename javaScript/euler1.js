// tn -> nth triangular number
module.exports = () => (tn => 3 * tn(999/3) + 5 * tn(995/5) - 15 * tn(990/15))(n => n * (n + 1) / 2)

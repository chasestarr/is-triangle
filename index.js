module.exports = function(sides) {
  sides.sort(compare)

  console.log(sides[0])
}

function compare(a, b) {
  return a - b;
}
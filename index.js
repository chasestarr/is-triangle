module.exports = function(sides) {
  if (!Array.isArray(sides)) {
    console.error(new Error("is-triangle input must be array of ints"));
    return null;
  }

  if (sides.length !== 3) {
    console.error(new Error("is-triangle input must have a length of 3"));
    return null;
  }

  sides.sort(compare)
  if (sides[0] + sides[1] > sides[2]) {
    return true;
  }

  return false;
}

function compare(a, b) {
  return a - b;
}
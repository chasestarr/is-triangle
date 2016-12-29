const isTriangle = require('./index.js')
const expect = require('chai').expect;

describe('is-triangle function', function() {
  it('should return true for valid triangle', function() {
    expect(isTriangle([3, 4, 5])).to.be.true;
  });

  it('should return false for invalid triangle', function() {
    expect(isTriangle([3, 4, 10])).to.be.false;
  });

  it('should return null for non-array input', function() {
    expect(isTriangle("1, 2, 3")).to.be.null;
  });

  it('should return null for array input length not three', function() {
    expect(isTriangle([1, 2, 3, 4])).to.be.null;
  });
});
const should = require('chai').should();

// const adder = require('../adder');
const modulus = require('../modulus');

// unit tests for our `adder` function
// describe('adder', function() {
describe('modulus', function() {

  // test the normal case
  it('should do the modulus of two numbers', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 15, b: 5, expected: 0},
      {a: 15, b: 3, expected: 0},
      {a: 15, b: 15, expected: 0}
    ];
    // for each set of inputs (a, b), `modulus` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = modulus(input.a, input.b);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['15', 5],
      ['15', 3],
      ['15', 15]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          adder(input[0], input[1])
      }).should.throw(Error);
    });
  });
});

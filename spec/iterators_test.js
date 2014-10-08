var expect = require('chai').expect;
var Iterators = require('../iterators.js');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it('should return the highest number in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });


  describe('#min', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it('should return the lowest number in a group', function () {
      expect(Iterators.min(myArr)).to.equal(22);
    });
    it('should return Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });


  describe('#each', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it('should run a function on each element of a provided array ', function () {
      expect(Iterators.each(myArr)).to.equal([68,24,69,36]);
    });
    it('should return each element of a provided array separately'), function () {
      expect(Iterators.each(myArr)).to.equal();
    });
    it('should skip any empty array elements', function() {
      myArr = [9, 7, 2,,1];
      expect(Iterators.each(myArr)).to.equal([9,7,2,,1]);
    });
  });


  // describe('#map', function () {

  //   // cleaner to declare the variable outside of the beforeEach function
  //   var myArr;

  //   // use beforeEach(function(){}); to create a variable before each test is run.
  //   // This prevents overwriting when we have multiple tests and manipulate multiple values
  //   beforeEach(function () {
  //     myArr = [66,22,67,34];
  //   });

  //   it('should create a new array by running a function on each array element', function () {
  //     expect(Iterators.map(myArr)).to.equal(22);
  //   });
  // });





  // describe('#reject', function () {

  //   // cleaner to declare the variable outside of the beforeEach function
  //   var myArr;

  //   // use beforeEach(function(){}); to create a variable before each test is run.
  //   // This prevents overwriting when we have multiple tests and manipulate multiple values
  //   beforeEach(function () {
  //     myArr = [66,22,67,34];
  //   });

  //   it('should return an object if the reason matches its promise', function () {
  //     expect(Iterators.reject(myArr)).to.equal(22);
  //   });
  // });


});

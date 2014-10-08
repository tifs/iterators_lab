# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

* `max`: returns the highest number of a group. ex. Math.max(3,2,9) = 9
* `min`: returns the lowest number of a group. ex. Math.min(3,2,9) = 2
* `each`: runs a function on each array element. ex. array.forEach(function[])
* `map`: creates a new array by running a function on each individual value within an array
* `filter`: creates a new smaller array of elements that fit stated criteria from the provided array [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* `reduce`: combines all values in an array and returns a single number [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* `reject`: returns an object if the provided reason matches the function's promise [note](http://underscorejs.org/#reject)

Use the notes provided to help guide you explanation.


### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).


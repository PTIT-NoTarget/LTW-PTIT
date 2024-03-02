'use strict';

function makeMultiFilter(originalArray) {
  let currentArray = originalArray;

  function arrayFilterer(filterCriteria, callback) {
    if (filterCriteria === undefined) {
      return currentArray;
    }
    currentArray = currentArray.filter(filterCriteria);
    if (typeof callback === "function") {
      callback.call(originalArray, currentArray);
    }
    return arrayFilterer;
  }
  return arrayFilterer;
}

module.exports = makeMultiFilter;
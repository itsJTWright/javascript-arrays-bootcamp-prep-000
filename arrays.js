var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var arr = [...array]
  return arr.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}
'use strict'

function addTwoValues(num1, num2){
    return num1 + num2;
}

function first(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

export {addTwoValues, first};

export {addTwoValues};
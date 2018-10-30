'use strict'
import {addTwoValues} from './js/app'
// test or it

it("should add two numbers", function(){
    // Assertion 
    expect(addTwoValues(4, 5)).toEqual(9);
})
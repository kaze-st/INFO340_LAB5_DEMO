'use strict'
import { addTwoValues, first } from './js/app'
// test or it

describe("This tests addTwoValues", () => {
    it("should add two positive numbers", function () {
        // Assertion 
        expect(addTwoValues(4, 5)).toEqual(9);
        expect(addTwoValues(9, 1)).toEqual(10);
        expect(addTwoValues(1, 10)).toEqual(11);
    })

    it("should add two negative numbers", function () {
        // Assertion 
        expect(addTwoValues(-1, -2)).toEqual(-3);
        expect(addTwoValues(-9, -4)).toEqual(-13);
    })

})

describe("This tests first", () => {
    it("should return the first value", function () {
        // Assertion 
        expect(first([7, 4, 5, 3])).toEqual(7);
        expect(first([4, 3, 2, 1], 3)).toContain(4);
        expect(first([4, 3, 2, 1], 3)).toEqual([4, 3, 2]);
        expect(first([4, 3, 2, 1], -3)).toEqual([]);
    })


})


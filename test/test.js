const { addPrimeTest } = require('../all');
const expect = require('chai').expect;

describe('addPrimeTest', () => {
    it('returns empty array for empty input', () => {
        expect(addPrimeTest([])).to.deep.equal([]);
    });

    it('returns empty array when no primes are present', () => {
        expect(addPrimeTest([0, 1, 4, 6, 8, 9, 10])).to.deep.equal([]);
    });

    it('returns the same array when all elements are primes', () => {
        expect(addPrimeTest([2, 3, 5, 7, 11, 13])).to.deep.equal([2, 3, 5, 7, 11, 13]);
    });

    it('filters out non-primes from a mixed array', () => {
        expect(addPrimeTest([2, 4, 5, 6, 7, 8, 9, 10, 11])).to.deep.equal([2, 5, 7, 11]);
    });

    it('handles negative numbers and zero', () => {
        expect(addPrimeTest([-10, -3, 0, 1, 2, 3])).to.deep.equal([2, 3]);
    });

    it('handles array with only 2', () => {
        expect(addPrimeTest([2])).to.deep.equal([2]);
    });

    it('handles large numbers', () => {
        expect(addPrimeTest([997, 998, 999, 1000])).to.deep.equal([997]);
    });
});

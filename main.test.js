import { getSum } from "./main.js";
import { isPrime } from "./main.js";
import { calcDegree } from "./main.js";

describe('test for getSum function', () => {
    it('test', () => {
        expect(getSum(2)(2)).toBe(4)
    })
})


describe('test for isPrime function', () => {
    it('non-prime test ', () => {
        expect(isPrime(100)).toBe("Непростое число")
    }),
    it('prime number test', () => {
        expect(isPrime(2)).toBe("Простое число")
    }),
    it('test', () => {
        expect(isPrime(1001)).toBe("Данные неверны")
    });
})

describe('test for calcDegree function', () => {
    it('test', () => {
        expect(calcDegree(2, 4)).toBe(16)
    })
})
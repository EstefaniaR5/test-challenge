const fizzBuzz = require('../fizzBuzz');

test ("If the number is divisible by 3, return Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test ("If the number is divisible by 5, return Buzz", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test ("If the number is divisible by 3 and 5, return FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})

test ("Else, return the number passed as an argument", () => {
    expect(fizzBuzz(1)).toBe(1);
})
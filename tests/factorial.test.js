const factorial = require ('../factorial')

test("El factorial de 0 es 1", () => {
    expect(factorial(0)).toBe(1);
})

test("El factorial de 1 es 1", () => {
    expect(factorial(1)).toBe(1);
})

test("El factorial de 2 es 2", () => {
    expect(factorial(2)).toBe(2);
})
test("El factorial de 3 es 6", () => {
    expect(factorial(3)).toBe(6);
})
test("El factorial de 4 es 24", () => {
    expect(factorial(4)).toBe(24);
})
test("El factorial de 5 es 120", () => {
    expect(factorial(5)).toBe(120);
})
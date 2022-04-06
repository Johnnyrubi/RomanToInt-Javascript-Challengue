const romanToInt = require("./romanToInt")

test("teste se a função retorna 10 ao receber X", () => {
    expect(romanToInt("X")).toBe(10);
});

test("teste se a função retorna 1 ao receber I", () => {
    expect(romanToInt("I")).toBe(1);
});

test("teste se a função retorna 5 ao receber V", () => {
    expect(romanToInt("V")).toBe(5);
});

test("teste se a função retorna 1500 ao receber MD", () => {
    expect(romanToInt("MD")).toBe(1500);
});

test("teste se a função retorna 1500 ao receber AAMAAD", () => {
    expect(romanToInt("AAMAAD")).toBe(1500);
});

test("teste se a função retorna 0 não receber Nada", () => {
    expect(romanToInt("AAMAAD")).toBe(1500);
});

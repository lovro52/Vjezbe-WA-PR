const { fizzbuzz } = require("./fizzbuzz");

test("ako je prosljeđen broj dijeljiv sa 3 vrati Fizz ", () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test("ako je prosljeđen broj dijeljiv sa 6 vrati Fizz ", () => {
  expect(fizzbuzz(6)).toBe("Fizz");
});

test("ako je prosljeđen broj dijeljiv sa 5 vrati Buzz ", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

test("ako je prosljeđen broj dijeljiv sa 5 vrati Buzz ", () => {
  expect(fizzbuzz(10)).toBe("Buzz");
});

test("ako je prosljeđen broj dijeljiv sa 3 i 5 vrati FizzBuzz ", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

test("ako je prosljeđen broj dijeljiv sa 3 i 5 vrati FizzBuzz ", () => {
  expect(fizzbuzz(30)).toBe("FizzBuzz");
});

test("ako je prosljeđen broj dijeljiv sa 7 vrati Suzz ", () => {
  expect(fizzbuzz(7)).toBe("Suzz");
});

test("ako je prosljeđen broj dijeljiv sa 3 i 7 vrati FizzSuzz ", () => {
  expect(fizzbuzz(21)).toBe("FizzSuzz");
});

test("ako je prosljeđen broj dijeljiv sa 5 i 7 vrati SizzBuzz ", () => {
  expect(fizzbuzz(35)).toBe("BuzzSuzz");
});

test("ako je prosljeđen broj dijeljiv sa 5 i 7 i 3 vrati FizzBuzzSuzz ", () => {
  expect(fizzbuzz(105)).toBe("FizzBuzzSuzz");
});

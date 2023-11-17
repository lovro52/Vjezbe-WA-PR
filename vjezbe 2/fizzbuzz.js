function fizzbuzz(n) {
  if (n % 3 == 0 && n % 5 == 0 && n % 7 == 0) return "FizzBuzzSuzz";
  if (n % 3 == 0 && n % 5 == 0) return "FizzBuzz";
  if (n % 3 == 0 && n % 7 == 0) return "FizzSuzz";
  if (n % 5 == 0 && n % 7 == 0) return "BuzzSuzz";
  if (n % 3 == 0) return "Fizz";
  if (n % 5 == 0) return "Buzz";
  if (n % 7 == 0) return "Suzz";
}
module.exports = { fizzbuzz };

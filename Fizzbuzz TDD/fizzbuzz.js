/* Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number 
and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three 
and five print “FizzBuzz” */

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz'; 
  if (num % 3 === 0) return 'fizz'
  if (num % 5 === 0) return 'buzz'
  return num
}

module.exports = fizzBuzz

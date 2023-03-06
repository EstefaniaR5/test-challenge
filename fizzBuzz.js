//Write a function that takes in a number and returns one oration or another 
function fizzBuzz(num){
    if(num%3 == 0 && num%5 == 0)
        return 'FizzBuzz';
    if(number % 5 == 0) 
        return 'Buzz';
    if(number % 3 == 0) 
        return 'Fizz';
    else
        return num;
}

module.exports = fizzBuzz;
/*

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(s) {
	let str = s.toLowerCase();
    let array = str.split('');
    for(let i=0; i<array.length; i++){
        array[i] = array[i].toUpperCase() + array[i].repeat(i);
    }

    return array.join('-');
}

console.log(accum('abCd'));



// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    return x.reduce((a,b) => a*b)
}

console.log(grow([1, 2, 3, 4]));



// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    let array = [];
    for(let i=0; i<=n; i++){
        array.push(2**i)
    }
    return array;
  }


console.log(powersOfTwo(2))



// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18


function howManyLightsabersDoYouOwn(name) {
    return name === "Zach"? 18: 0;
  }

  console.log(howManyLightsabersDoYouOwn("Zach"))
  
  
//   We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
  


function numberToString(num) {
    // Return a string of the number here!
    return num.toString();
  }

  console.log(numberToString(2352));

//   Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that



var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    for(let i=1; i<=humanYears; i++){
        if(i===1){
            catYears += 15;
            dogYears += 15;
        } else if(i===2){
            catYears += 9;
            dogYears += 9;
        } else if(i>2){
            catYears += 4;
            dogYears += 5;
        }
    }
    return [humanYears,catYears,dogYears];
  }
  

  console.log(humanYearsCatYearsDogYears(5));

  */

//   Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
let arr = numbers.map(num => num**2);
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum += arr[i]
}
return sum;
}

console.log(squareSum([1, 2, 2]));
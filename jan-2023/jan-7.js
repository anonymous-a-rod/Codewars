/*
 // return min / max
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
        if (arr[i] > max) {
          max = arr[i];
        }
    }
  return [min, max]; // fix me!
}



// alternative answers from codewars

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));



// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmi = weight / (height**2)
    if (bmi <= 18.5){
       return "Underweight - possibly raw vegan - course correct" ;
    } else if (bmi <= 25.0) {
        return "Normal"
    } else if (bmi <= 30.0) {
        return "Overweight"
    } else if (bmi > 30) {
        return "Obese"
    }
}

console.log(bmi(40,160));



// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  x = x
    .replaceAll("1", "0")
    .replaceAll("2", "0")
    .replaceAll("3", "0")
    .replaceAll("4", "0");
  x = x
    .replaceAll("5", "1")
    .replaceAll("6", "1")
    .replaceAll("7", "1")
    .replaceAll("8", "1")
    .replaceAll("9", "1");
  return x;
}

console.log(fakeBin("32674188"));



// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.


function getVolumeOfCuboid(length, width, height) {
    return length*width*height;
  }

console.log(getVolumeOfCuboid(5,5,5))



// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    let sum = 0;
    for(let i = 0; i<number; i++){
        if(i%3 === 0 || i%5 === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10));



// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
    let reverseSeq = [];
    for(let i=n; i>0; i--){
        reverseSeq.push(i)
    }
  return reverseSeq;
};

console.log(reverseSeq(10));



// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  let smallestNum = Math.max(...numbers);
  let secondSmallestNum = Math.max(...numbers);

  
  for(let i=0; i<numbers.length; i++){
    if (numbers[i] < smallestNum) {
        secondSmallestNum = smallestNum;
      smallestNum = numbers[i];
    } else if (numbers[i] < secondSmallestNum) {
      secondSmallestNum = numbers[i];
    }
  }
  return smallestNum + secondSmallestNum;

}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));



// .sort(function (a, b) {return a - b;})   used to sort an array in ascending order

console.log(
  [1, 6, 235, 334, 13, 643, 235].sort(function (a, b) {
    return a - b;
  })
);



// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let rentalCost = d*40;
  if(d>=7){
    rentalCost -= 50;
  } else if (d>=3){
    rentalCost -= 20;
  }
  return rentalCost;
}

console.log(rentalCarCost(2));
console.log(rentalCarCost(4));
console.log(rentalCarCost(10));



//  Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

console.log(makeUpperCase('hey there'));



// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive(arr) {

    for(let i =1; i < arr.length; i++){
        if(arr[i] !== arr[i-1]+1){
            return arr[i];
        }
    } return null;
}

console.log(firstNonConsecutive([1,2,3,4,5,7,8,9]))
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]));



// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

const areaOrPerimeter = function (l, w) {
  if(l === w){
    return l*w;
  } else {
    return 2*l +2*w;
  }
};

console.log(areaOrPerimeter(4,4));
console.log(areaOrPerimeter(6, 4));



// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
    let newArr = [];
    for(let i=0; i<a.length; i++){
        if(!b.includes(a[i])){
            newArr.push(a[i]);
        }
    }
    return newArr;
}


console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// console.log([1, 2, 2, 2, 3].includes(2));



// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2) {
    if(array1 === null || array2 === null){
        return false
    }
    if(array1.length !== array2.length){
        return false
    }
    array1 = array1.sort(function (a, b) {return a - b;})
    array2 = array2.sort(function (a, b) {return a - b;});

    for(let i=0; i<array1.length; i++){
        if(array1[i]**2 !== array2[i]){
            console.log(array1[i] ** 2);
            console.log(array2[i]);
            return false
        }
    }
    return true
}

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
let c = [132, 14641, 20736, 361, 25921, 121, 20736, 361];
console.log(comp(a ,b));
console.log(comp(a, c));

*/
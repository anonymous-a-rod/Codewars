/*
// our task is to write a function which returns the sum of following series upto nth term(parameter).

// Series:  + /4 + /7 + /0 + /3 + /6 +...

function SeriesSum(n) {
    if(n===0){
        return n.toFixed(2);
    }
    let sum = ;
  for(let i=; i<n; i++){
    sum += /((i)*3 + );
  }
  return sum.toFixed(2);
}

console.log(SeriesSum(0));




// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  let classSum = 0;
  for(let i=0; i<classPoints.length; i++){
    classSum += classPoints[i];
  }
  let classAverage = classSum/classPoints.length;
  console.log(classAverage);
  if(classAverage<yourPoints){
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage([00, 40, 34, 57, 29, 72, 57, 88],80));
console.log(betterThanAverage([00, 40, 34, 57, 29, 72, 57, 88], 40));


let array = [00, 40, 34, 57, 29, 72, 57, 88];
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial)


let arr = [,2,3,4,5];
let sum = arr.reduce((a,b) => a+b,0);
console.log(sum)

// more practice

let arr2 = [53,235,653,52];
let int = 24;
let sum2 = arr2.reduce((a,b) => a+b, int);
console.log(sum2)



// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  if(name[0] === 'r' || name[0] === 'R'){
    return name + " plays banjo"; 
  } else {
    return name + " does not play banjo";
  }
}

console.log(areYouPlayingBanjo("aaron"));
console.log(areYouPlayingBanjo("Randall"));



// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  if (A.length === 1) {
    return A[0];
  }
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        sum += 1;
      }
      if (j === A.length - 1 && (sum === 1 || sum % 2 === 1)) {
        return A[i];
      }
    }
  }
  return 0;
}

console.log(findOdd([7]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));


// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.



function bouncingBall(h, bounce, window) {
  if(h<0 || bounce <= 0 || bounce >= 1 || window >= h){
    return -1
  }
  let sum = 1;
  let ballh = h*bounce;
  while(ballh>window){
    sum += 2
    ballh *= bounce;
  }
  return sum;
}

console.log(bouncingBall(3,0.66,1.5))


// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:



function litres(time) {
  return Math.floor(time*0.5);
}

console.log(litres(1));



// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

let firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' }
let surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' }

function aliasGen(first, last) {
  if(Boolean(first.charAt(0).match(/[a-zA-Z]/)) && Boolean(last.charAt(0).match(/[a-zA-Z]/))){
    let firstNameLetter = first[0].toUpperCase();
    let surnameLetter = last[0].toUpperCase();
    return firstName[firstNameLetter] + " " + surname[surnameLetter];
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}

console.log(aliasGen("Aaron", "bay"));
console.log(aliasGen("Aaron", "123"));


// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let spaces = "";
    for(let i=0; i<string.length; i++){
        if (Boolean(string[i].match(/[A-Z]/))) {
            spaces += " " + string[i];
        } else{
            spaces += string[i];
        }
    }
    return spaces;
}

console.log(solution("camelCasing"));


// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  let newStr = ""
  for(let i = str.length-1; i>=0; i--){
    newStr += str[i];
  }
  return newStr;
}

console.log(solution("hello"));


function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("hello"));



// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// FUNDAMENTALS

function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3)/3;
  if (avg >= 90) {
    return "A";
  } else if (avg >= 80) {
    return "B";
  } else if (avg >= 70) {
    return "C";
  } else if (avg >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(77,95,69));

*/

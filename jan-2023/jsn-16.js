/* 
var a = "code";
var b = "wa.rs";
var name = a + b;

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort();
    original = original.toLowerCase().split('').sort();
    for(let i=0; i<test.length; i++){
        if(test[i] !== original[i]){
            return false;
        }
    }
    return original.length == test.length;
};

console.log(isAnagram("Buckethead", "DeathCubeK"))

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1){
            if(i === arr.length-1){
                sum++;
            } else {
                sum += 2**(arr.length-i-1);
            }

        }
    }
    return sum;
  };


  console.log(binaryArrayToNumber([1, 0, 1, 1]))

//   Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    name = name.toUpperCase().split(' ')
    return name[0][0] + "." + name[1][0];
}

console.log(abbrevName("Evan Cole"))

// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
    str = str.toLowerCase().split('');
    let wave = [];
    for(let i=0; i<str.length; i++){
        if(str[i] !== " "){
            str[i]= str[i].toUpperCase();
            wave.push(str.join(''));
            str[i]= str[i].toLowerCase();
        }
    }
    return wave;
  }

console.log(wave("two words"))



// Now you have to write a function that takes an argument and returns the square of it.

function square(num){
    return num**2;
  }

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    text = text.toLowerCase().split("");
    let count = 0;

    while(text.length > 0){
        let LengthBefore = text.length;
        text = text.filter((letter) => letter != text[0]);
        let LengthAfter = text.length;
        if(LengthBefore-LengthAfter > 1){
            count++
        }
    }
    return count;
  }

console.log(duplicateCount("Indivisibilities"))


// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    return str.split(" ").reverse().join(' ');
  }

console.log(nameShuffler("john McClane"))

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n){
    if(n == 0){
        return 0;
    } else if(n > 0){
        if(n%5 === 0){
            return n
        } else{
            return n+(5-(n%5)); 
        }
    } else if(n < 0){
        return n+Math.abs(n%5)
    }
  }
console.log(roundToNext5(5));

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers){
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let arr = [];
    for(let i=min; i<=max; i++){
        arr.push(i);
    }
    return arr;
}

console.log(pipeFix([1,2,3,12]))

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"


function remove (string) {
    return string[string.length-1] === '!'? string.slice(0,string.length-1): string;
  }

console.log(remove("!"))

// also can use    .endsWith

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

function arithmetic(a, b, operator){
    if(operator === "add"){
        return a+b;
    } else if (operator === "subtract"){
        return a-b;
    } else if (operator === "divide"){
        return a/b;
    } else if (operator === "multiply"){
        return a*b;
    } else {
        return "Input Error";
    }
  }

console.log(arithmetic(1,2,"add"))

function getChar(c){
    return String.fromCharCode(c)
  }

console.log(getChar(65))


// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
    let arr = [];
    for(let i=1; i<=nFloors; i++){
        let str = " ".repeat(Math.floor(nFloors-i)) + "*".repeat(2*i-1) + " ".repeat(Math.floor(nFloors-i));
        arr.push(str);
    }
    return arr;
  }


console.log(towerBuilder(3))

// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

function unusualFive() {
    return "hello!".indexOf("!");
  }

  console.log(unusualFive())

  function plural(n) {
    return n != 1;
  }


  function isPrime(n) {
    if(n < 2){
        return false;
    } 
    for(let i = 2; i <= n/2; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
  }

  console.log(isPrime(11))

//   Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if(typeof input == 'null'){
        return [];
    } else if (input == null){
        return [];
    }
    let countPositive = 0;
    let sumNegative = 0;
    for(let i = 0; i<input.length; i++){
        if(input[i] < 0){
            sumNegative += input[i];
        } else if(input[i] > 0){
            countPositive++;
        }
    }
    if(countPositive == 0 && sumNegative == 0){
        return [];
    }
    return [countPositive, sumNegative];
  }

console.log(countPositivesSumNegatives([]))

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

function reverse(string){
    return string.split(' ').reverse().join(' ');
  }

console.log(reverse('I am an expert at this'))

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    return health >= damage? health-damage : 0;
  }

console.log(combat(20,30))

// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string



function reverseLetter(str) {
    return str.match(/[a-z]/ig).reverse().join('');
    return str.split('').filter((char) => /[a-zA-Z]/.test(char)).reverse().join('');
  }

console.log(reverseLetter("krish21an"))

function findMultiples(integer, limit) {
    let arr = [];
    for(let i=integer; i<=limit; i+=integer){
        arr.push(i);
    }
    return arr;
  }

console.log(findMultiples(4, 27))



function take(arr, n) {
    return arr.slice(0,n)
  }

console.log(take([0, 1, 2, 3, 5, 8, 13], 3))



function problem(x){
   return typeof x == 'number'? x*50+6 : "Error";
  }

console.log(problem(10))



function smallEnough(a, limit){
    return Math.max(...a) <= limit;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))

function switchItUp(number){
    switch(number){
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
    }
    return "Invalid Entry"
    }

console.log(switchItUp(3))



function mergeArrays(arr1, arr2) {
    let concat = arr1.concat(arr2).sort((a,b) => a-b);
    let arr = [];
    for(let i=0; i<concat.length; i++){
        if(concat[i] !== arr[arr.length-1]){
            arr.push(concat[i])
        }
    }
  return arr;
}

console.log(mergeArrays([1,2,3,4], [5,6,7,7,8]))



function gimme (triplet) {
let tripletCopy = [...triplet];
let sortedList = tripletCopy.sort((a,b) => a-b);
return triplet.indexOf(sortedList[1]);;
}

console.log(gimme([2, 3, 1]))

function isIsogram(str){
    str = str.toLowerCase();
    for(let i = 0; i<str.length; i++){
        for(let j = 0; j<str.length; j++){
            if(str[i] === str[j] && i !== j){
                return false;
            }
        }
    }
    return true;
  }

console.log(isIsogram("Dermatoglyphics"));



function addFive(num) {
    var total = num + 5
    return total
  }
  


function getDivisorsCnt(n){
    let count = 1;
    for(let i = 1; i<=n/2; i++){
        if(n%i === 0){
            count++;
        }
    }
    return count;
    }

console.log(getDivisorsCnt(4))

function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    string = string.replace(/[^a-z]/gi,'').toLowerCase().split('').sort();
    for(let i = 0; i<string.length; i++){
        let index = alphabet.indexOf(string[i])
        count[index]++;
    }
    return !(count.includes(0));
  }

console.log(isPangram("Cwm fjord bank glyphs vext quiz"))

function XO(str) {
    let arr = str.toLowerCase().split('');
    let [x,o] = [0,0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === 'x'){
            x++;
        } else if(arr[i] === 'o'){
            o++;
        }
    }
    return x === o;
}

// could use .match(/x/gi)  .match(/o/gi)  to count the total amount 

console.log(XO("xxOo"))

function multipleOfIndex(array) {
    let arr = [];
    for(let i=0; i<array.length; i++){
        if(array[i]%i === 0){
           arr.push(array[i]);
        }
    }
    return arr;
  }

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))

function lovefunc(flower1, flower2){
    return flower1%2 !== flower2%2;
  }

console.log(lovefunc(7,4))

function main (verb, noun){
  return verb + noun
}
*/

function digitize(n) {
    return String(n).split('').reverse().map((n) => Number(n));
  }

console.log(digitize(35231))
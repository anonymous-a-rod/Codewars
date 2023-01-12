/*

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


function reverseWords(str){
    let array = str.split(" ");
    array.reverse();
    return array.join(' '); // reverse those words
  }

console.log(reverseWords("The greatest victory is that which requires no battle"))



// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i += 2){
        newArr.push(arr[i])
    }
    return newArr;
  }

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))



// 1. An array of arrays with int-numbers
// 2. The shifting value
// #The method should add the values of the arrays to one new array.

// The arrays in the array will all have the same size and this size will always be greater than 0.
// The shifting value is always a value from 0 up to the size of the arrays.
// There are always arrays in the array, so you do not need to check for null or empty.

// #1. Example:

// [[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0

// 1,2,3,4,5,6
// 7,7,7,7,7,-7

// --> [8,9,10,11,12,-1]
// #2. Example

// [[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

// 1,2,3,4,5,6
//       7,7,7,7,7,7

// --> [1,2,3,11,12,13,7,7,7]
// #3. Example

// [[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3


// 1,2,3,4,5,6
//       7,7,7,-7,7,7
//             1,1,1,1,1,1

// --> [1,2,3,11,12,13,-6,8,8,1,1,1]



function addingShifted (arrayOfArrays, shift) {
    let array = [];

    //shift
    for(let i=0; i<arrayOfArrays.length; i++){
        for(let j=0; j<shift*(i); j++){
            arrayOfArrays[i].unshift(0)
        }
    }

    for(let i=arrayOfArrays.length-1; i>=0; i--){
        for(let j=0; j<arrayOfArrays[i].length; j++){
            if(i===arrayOfArrays.length-1){
                array.push(arrayOfArrays[i][j]);
            } else {
               array[j] += arrayOfArrays[i][j]; 
            }
            
        }
    }
    return array;
  
}

console.log(addingShifted([[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3))



// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    if(names.length === 0){
        return "no one likes this";
    } else if(names.length === 1){
        return `${names[0]} likes this`
    } else if(names.length === 2){
        return `${names[0]} and ${names[1]} like this`
    } else if(names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if(names.length >= 4 ){
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }


    return -1;
  }

  // switch statement with switch(names.length) would've worked too 
  
  console.log(likes([]))
  console.log(likes(["Peter"]))
  console.log(likes(["Jacob","Alex"]))
  console.log(likes(["Max", "John", "Mark"]))
  console.log(likes(["Alex", "Jacob", "Mark", "Max"]))

 

//   There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
    if(arr[0] != arr[1] && arr[0] != arr[2]){
        return arr[0];
    } else if (arr[-1] != arr[-2] && arr[-1] != arr[-3]){
        return arr[-1];
    } 


    for(let i=1; i<arr.length; i++){
        if(arr[i] != arr[i-1]){
            return arr[i];
        }
    }
  }

  // simple solution is to arr.sort((a,b)=>a-b)  THEN return arr[0]==arr[1]?arr.pop():arr[0]

  console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));

  

//   Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    let sum;

    do {
        sum =0;
        

        while(n>0){
            sum += n%10;
            n = Math.trunc(n/10)
        }

        n = sum;

    } while(n >= 10)

    return sum;
  }

console.log(digitalRoot(942))

 */


/*


// Given the triangle of consecutive odd numbers:

//              1                            1    1
//           3     5                         2    3
//        7     9    11                      3    6
//    13    15    17    19                   4    10
// 21    23    25    27    29                5    15
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    if(n < 1){
        return -1;
    }
    return n**3;
}


console.log(rowSumOddNumbers(3));




// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
   let sqrt = Math.trunc(Math.sqrt(sq));
   if(sqrt**2 !== sq){
    return -1;
   } else{
    return (sqrt+1)**2;
   }
  }

  console.log(findNextSquare(625))

 

//   Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


const rps = (p1, p2) => {
    if(p1 == p2){
        return 'Draw!';
    } else if (p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock" || p1 === "rock" && p2 === "scissors"){
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
};

console.log(rps("paper", "paper" ))



// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    let array = str.split('');
    array.pop();
    array.shift();
   return array.join('');
   };

   console.log(removeChar("weweg"));

  

//    Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let oddArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i]%2 !== 0){
            oddArray.push(array[i]);
            array[i] = '#';
        }
    }
    oddArray.sort(function(a, b){return a-b});
    console.log("odd array: " + oddArray)
    for(let i=0; i<array.length; i++){
        if(array[i] === '#'){
            array[i] = oddArray.shift();
        }
    }
    return array;
  }

console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ])); 

  

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
    let array = num.toString().split('');
    let str = "";
    for(let i=0; i<array.length; i++){
        if(array[i] != 0){
            if(i !== array.length-1){
                if(i===0){
                    str += array[i] + "0".repeat(array.length-i-1);
                } else {
                    str += " + " + array[i] + "0".repeat(array.length-i-1);
                }
               
            } 
        }
        if(i === array.length-1 && array[i] != 0){
            str +=  " + " + array[i]; 
         } 
  }
  return str;
}

  console.log(expandedForm(62583510));

 

  
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    for(let i=0; i<array.length; i++){
        array[i] *= -1;
    }
    return array;
 }

 console.log(invert([1,-2,3,-4,5]))
  

//  Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    s += m*60 + h*3600;
    return s*1000
  }

  console.log(past(0,1,1));

  

//   Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//   Note: a and b are not ordered!
  
//   Examples (a, b) --> output (explanation)
//   (1, 0) --> 1 (1 + 0 = 1)
//   (1, 2) --> 3 (1 + 2 = 3)
//   (0, 1) --> 1 (0 + 1 = 1)
//   (1, 1) --> 1 (1 since both are same)
//   (-1, 0) --> -1 (-1 + 0 = -1)
//   (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//   Your function should only return a number, not the explanation about how you get that number.

function getSum( a,b )
{
    let sum = 0;
   let array = [];
   let direction = a < b? 1 : -1;

    if(direction === 1){
      for(let i=a; i<=b; i++){
    array.push(i);
        }  
    } else {
        for(let i=b; i<=a; i++){
      array.push(i);
          }  
      }
   
      for(let i=0; i<array.length; i++){
        sum += array[i]
      }
   
   return sum;
}

console.log(getSum(0,4));



// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    let newList = [];

    for(let i=0; i<birds.length; i++){
        if(birds[i] != "African" && birds[i] != "Roman Tufted" && birds[i] != "Toulouse" && birds[i] != "Pilgrim" && birds[i] != "Steinbacher"){
            newList.push(birds[i]);
        }
    }
    
    return newList;
    // return an array containing all of the strings in the input array except those that match strings in geese
  };

  console.log(gooseFilter( ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

  */

//  What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    let array = str.split(' ');
    for(let i=0; i<array.length; i++){
        array[i] += " " + array[i].length;
    }

    return array;
}

console.log(addLength("apple ban"));
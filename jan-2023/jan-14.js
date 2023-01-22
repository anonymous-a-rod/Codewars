/*


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if(number%2 === 0){
       return number*8 
    }  return number*9;
}

console.log(simpleMultiplication(4))
console.log(simpleMultiplication(5))



// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    let sum =0;
    for(let i=0; i<arrayOfSheep.length; i++){
        if(arrayOfSheep[i]){
            sum++;
        }
    }
    return sum;
  }

  // also could use   .filter(Boolean)

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]))
    
    

//     The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
    let arr = [];
    for(let i=0; i<data.length; i++){
        if((data[i][0] >= 55)&&(data[i][1] > 7)){
            arr[i] = "Senior";
        } else {
            arr[i] = "Open";
        }
    }
    return arr;
  }


console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))



// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    return (n===0)? 0 : n.toString().split('').sort((a,b) => b-a).join('')*1;
}

  console.log(descendingOrder(15))
  



// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.replaceAll(' ', '')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

*/




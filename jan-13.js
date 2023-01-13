// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"
/*
function spinWords(string){
    let array = string.split(' ');
    for(let i =0; i<array.length; i++){
        if(array[i].length >= 5){
            array[i] = array[i].split('').reverse().join('')
        }
    }
    
   return array.join(' ');
  }

console.log(spinWords('Hey fellow warriors'));


// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12


function queueTime(customers, n) {
    // return 0 if no customers
    if(!(Math.max(...customers) > 0)){
        return 0;
    }
    // establish an array of cashiers with default wait times of 0;
    let cashierArray = [];
    for(let i=0; i<n; i++){
        cashierArray[i] = 0;
    }

    let timer = 0;

    do {
    // open cashiers take the next customer from the list
    for(let i=0; i<cashierArray.length; i++){
            if(cashierArray[i] <= 0  && customers.length>0){
                cashierArray[i] = customers.shift();
            } 
        }

    // one minute passes. each line reduces by 1 minute and timer increases a minute.
    for(let i=0; i<cashierArray.length; i++){
        if(cashierArray[i] > 0){
           cashierArray[i]--; 
        }
    }
    timer++;
    // run loop until all customers have been fully serviced 
    } while((customers.length>0) || (Math.max(...cashierArray) > 0) );

   return timer;
  }

console.log(queueTime([5,3,4],    1))


// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

function pyramid(n) {
    let array = [];
    for(let i=0; i<n; i++){
        array[i] = [];
        for(let j=0; j<=i; j++){
            array[i][j] = 1;
        }
    }
    // your code here

    return array;
  }

console.log(pyramid(3))


*/

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let array = numbers.split(' ');
    for(let i=0; i<array.length; i++){
        array[i] = parseInt(array[i]);
    }
    array.sort((a,b) => a-b)
    return `${array[array.length - 1]} ${array[0]}`;
  }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
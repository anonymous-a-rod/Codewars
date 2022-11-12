// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
  if(bool){
    return "Yes"
  } else {
    return "No"
  }
}


// Count all the sheep on farm in the heights of New Zealand

function lostSheep(friday,saturday,total){
  
  let count = 0;
  
  for(i = 0; i < friday.length; i++){
    count += friday[i]
  }
  for(i = 0; i < saturday.length; i++){
    count += saturday[i]
  }
  
  let lost = total - count;
  return lost;
}

// Grasshopper - Summation

var summation = function (num) {
  let sum = 0;
  
  for(i=1; i<num+1; i++){
    sum += i;
  }
  return sum;
}

// Double Char

function doubleChar(str) {
  let newStr = "";
  let char = "";
  
  for(i=0; i<str.length; i++){
    char = str.slice(i, i+1);
    newStr += char;
    newStr += char;
  }
  
  return newStr
}


// String repeat

function repeatStr (n, s) {
  let newStr = "";
  
  for(let i=0; i<n; i++){
    newStr += s;
  }
  
  return newStr;
}

// L1: Set Alarm

function setAlarm(employed, vacation){
  if(employed && !vacation){
    return true;
  } else {
    return false;
  }
}

// Remove exclamation marks

function removeExclamationMarks(s) {
  return s.replace("!","");
}

// Even or Odd

function evenOrOdd(number) {
  return evenOdd = number%2 == 0? "Even" : "Odd"; 
}

// Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  
  if(current === "green"){
    return "yellow"
  } else if (current === "yellow"){
    return "red"
  } else if (current === "red"){
    return "green"
  } 
}

// Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if((distanceToPump - mpg*fuelLeft) > 0){
    return false;
  } 
    return true
};

// Will there be enough space?
function enough(cap, on, wait) {
  let openSeats = cap - on;
  let difference = openSeats - wait;
  if(difference >= 0){
    return 0
  } else {
    return difference*-1
  }
}

// Cats and shelves

function solution(start, finish) 
{
  let difference = finish-start;

  let jumps = Math.floor(difference/3)
  if(difference%3 == 1){
    jumps++
  }
  if(difference%3 == 2){
    jumps += 2
  }
  
  return jumps
}


// Quarter of the year

const quarterOf = (month) => {
  let quarter = Math.ceil(month/3)
  return quarter
}

// Spoonerize Me

function spoonerize(words) {
    let array = words.split(" ")
    let word1 = array[0]
    let word1Char = word1[0]
    
    let word2 = array[1]
    let word2Char = word2[0]
    
    words = word2Char + word1.slice(1) + " " + word1Char + word2.slice(1)
    return words   
}

/// Convert a String to a Number!

var stringToNumber = function(str){
  // put your code here
  return Number(str);
}

// String ends with?

function solution(str, ending){

  let endingLength = ending.length
  let strLength = str.length
  str = str.slice(str.length-ending.length,str.length)
  
  if(ending === str){
  return true;
  } else {
  return false;
  }
 
 }

// Remove exclamation marks

 function removeExclamationMarks(s) {
  let str = s.replace(/!/g,"");

  return str;
}

// Difference of Volumes of Cuboids

function findDifference(a, b) {
  let volumeA = a[0]*a[1]*a[2];
  let volumeB = b[0]*b[1]*b[2];
  let difference = Math.abs(volumeA - volumeB)
  return difference;
}


// Multiply

function multiply(a, b){
  return a * b
}

// Sum of positive

function positiveSum(arr) {
  let sum = 0;
  
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > 0){
      sum += arr[i]
    }
  }
  return sum
}

// Return Negative

function makeNegative(num) {
  if(num > 0 ){
    num *= -1
  }
  return num
}

// Complementary DNA

function DNAStrand(dna){
  
  let DNA = ""
  
  for(let i = 0; i < dna.length; i++){
    if(dna[i] === "A"){
    	DNA += "T"
    } else if(dna[i] === "T"){
    	DNA += "A"
    } else if(dna[i] === "C"){
    	DNA += "G"
    } else if(dna[i] === "G"){
    	DNA += "C"
    }    
  }
  
  return DNA
  
}
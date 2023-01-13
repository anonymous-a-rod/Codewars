// I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.
/*
function alphabet(ns) {
    ns.sort((a, b) => a - b);
    let a = ns[0];
    let b = ns[1];
    let AxB = a*b;
    let c = ns[2] === AxB? ns[3] : ns[2];

    let BxC = b*c;
    let CxD = ns[ns.length-1];

    
    let d = CxD/c

    return d;
  }

console.log(alphabet([2,3,4,1,12,6,2,4]))



// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

// You solution should return an array [smallest, minimumAbsent, largest]

// The smallest integer should be the integer from the array with the lowest value.

// The largest integer should be the integer from the array with the highest value.

// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

// minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
// minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
// minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]

function minMinMax(array) {
   array.sort((a,b) => a-b);
   let min = array[0];
   let max = array[array.length-1];
   let minimumAbsent;

   for(let i=1; i<array.length; i++){
    if(!array.includes(min+i)){
        minimumAbsent = min+i;
        break;
    }
   }

   return [min,minimumAbsent,max];
}

console.log(minMinMax([-1, 4, 5, -23, -22, -21, 24]))



// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    if(num === 0){
        return 0;
    }
    let list =[];
    while(num > 0){
        list.push(num%10)
        num = Math.trunc(num/10);
    }
    list.reverse();
    list = list.map(x => x**2);
    list = list.join('');
    let int = parseInt(list);
    return int;
  }

console.log(squareDigits(2112))

*/
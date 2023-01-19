/*
function mango(quantity, price){
    return (Math.floor(quantity/3)*2*price) + quantity%3*price;
}

console.log(mango(9,5))

function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while(principal < desired){
        principal += principal * interest * (1-tax);
        console.log(principal);
        years++
    }
    return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100))

function sumOfDifferences(arr) {
    if(typeof arr == "null" || arr.length <= 1){
        return 0;
    }
    arr = arr.sort((a,b) => b-a);
    let sum = 0;
    for(let i = 0; i<arr.length-1; i++){
        sum += arr[i] - arr[i+1]
    }
    return sum;
}

console.log(sumOfDifferences([1, 2, 10]))

let findAverage = function (nums) {
    return nums.reduce((a,b) => a+b)/nums.length;
  }

console.log(findAverage([1, 3, 5, 7]))

*/

function basicOp(operation, value1, value2){
  switch(operation){
    case '+':
        return value1 + value2;
    case '-':
        return value1 - value2;
    case '/':
        return value1 / value2;
    case '*':
        return value1 * value2;
    default:
        return 'Invalid Input';
  }
}

console.log(basicOp('+', 4, 7))
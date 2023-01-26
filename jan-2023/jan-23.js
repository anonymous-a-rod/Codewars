/*
function sumCubes(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum += Math.pow(i,3);
    }
    return sum;
  }

console.log(sumCubes(3));


function nearestSq(n){
    let upper = Math.ceil(Math.sqrt(n))**2;
    let lower = Math.floor(Math.sqrt(n))**2;
    return upper - n > n - lower ? lower : upper;
}

console.log(nearestSq(10))



const countBits = function(n) {
    let binaryDigits = '';
    while(n > 0){
        binaryDigits += n%2;
        n = Math.floor(n/2);
    }
    return binaryDigits.replaceAll('0','').length;
  };

  console.log(countBits(10))
  
  */

const countBits = function(n) {
return n.toString(2).replaceAll('0','').length;
};

  console.log(countBits(10))
/*

function incrementString (str) {
    let index = str.length-1;
    str = str.split('');
    let numbers = '';

    // determine if it's a digit or not
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

    // remove digits off the end
    while(isNumber(str[index])){
        numbers += str.pop();
        index--;
    }

    // if no digits return string plus 1
    if(numbers == ''){
        return str.join('')+1;
    }

    numbers = numbers.split('').reverse('').join('');
  
    // record initial length of number
    let numbersLength = numbers.length;
    
    // add one to the int
    numbers = parseInt(numbers)+1;
    numbers = numbers.toString().split('');

    // replace any leading zero's to the number
    while(numbers.length < numbersLength){
        numbers.unshift('0');
    }

    return str.join('')+numbers.join('');
  }

  console.log(incrementString("foobar"));

  function isPrime(number) {
    if(number < 2){
        return false;
    }
    for(let i = 2; i<=Math.sqrt(number); i++){
        if(number%i === 0){
            return false;
        }
    }
    return true;
  }
  
  function getPrimes(a, b) {
    let start = a < b ? a : b;
    let end = a > b ? a : b;
    let arr = [];
    for(let i = start; i<=end; i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    return arr;
  }


  console.log(isPrime(4))
  
  console.log(getPrimes(2,40))

  function distinct(a) {
    return Array.from(new Set(a));
  }

 let encryptThis = function(text) {
    text = text.split(' ');
    for(let i = 0; i<text.length; i++){
        let word = text[i];
        let first = word.charCodeAt(0);

        if(word.length < 2){
            text[i] = first; 
        } else if (word.length === 2){
            text[i] = first + word[1]; 
        } else if (word.length === 3){
            text[i] = first + word[2] + word[1]; 
        } else {
            text[i] = first + word[word.length-1] + word.slice(2, word.length-1) + word[1];
        }
        
    }
    return text.join(' ');
  }

console.log(encryptThis('hello t ABC'))

function perfectSquare(string){
    let arr = string.split('\n');
    let dotCount = arr[0].length;
    if(dotCount !== arr.length){
        return false;
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length !== dotCount || /[^.]/.test(arr[i])){
            return false;
        }
    }
    return true;
  }

console.log(perfectSquare("...\n...\n..."))


function printArray(array){
    return array.join(',')
  }

function setReducer(input) {
    while(input.length > 1){
        input.filter((a,b) => a-b);
        let arr = [1];
        for(let i = 1; i<input.length; i++){
            if(input[i] == input[i-1]){
                arr[arr.length-1]++;
            } else {
                arr.push(1);
            }
        }
        console.log("arr: "+ arr)
        input = arr;
    }
    return input[0];
  }

console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]))

console.log(3**3)


function removeUrlAnchor(url){
    return url.split('#')[0]
  }

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))



let toAlternatingCase = function (str) {
    str = str.split('');
    for(let i = 0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            str[i] = str[i].toUpperCase();
        } else if(str[i] === str[i].toUpperCase()){
            str[i] = str[i].toLowerCase();
        }
    }
    return str.join('');
  }

console.log(toAlternatingCase("hello WORLD"))


function stairsIn20(s){
    let sum = 0;
    for(let i = 0; i<s.length; i++){
      for(let j = 0; j<s[i].length; j++){
        sum += s[i][j]
        }
    }
    return sum*20;
  }
  
  

function sumMul(n,m){
    if(n >= m){
        return 'INVALID';
    }
    let sum = 0;
    let multiples = n;
    while(multiples<m){
        sum += multiples;
        multiples += n;
    } return sum;
}

console.log(sumMul(2,9))

const sequenceSum = (begin, end, step) => {
    let sum = 0;
    for(let i = begin; i<=end; i += step){
        sum +=i;
    }
    return sum;
  };

console.log(sequenceSum(2,6,2))

function vowelIndices(word){
    let regex = /[aeiouy]/i;
    word = word.split('');
    let arr = [];
    for(let i = 0; i<word.length; i++){
        if(regex.test(word[i])){
           arr.push(i+1);
        }
    }
    return arr;
  }

console.log(vowelIndices('htheh'))

*/

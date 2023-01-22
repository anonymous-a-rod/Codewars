/*
function disemvowel(str) {
    return str.replace(/[aeiou]/gi,"");
  }

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))

function evaporator(content, evap_per_day, threshold){ 
    threshold = content * (threshold/100);
    let count = 0;
    while(content >= threshold){
        content -= (evap_per_day/100)*content;
        count++;
    }
    return count;
  }

console.log(evaporator(10,10,10))

function longest(s1, s2) {
    let arr = s1.concat(s2).split('').sort();
    let filteredArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] != filteredArr[filteredArr.length-1]){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr.join('');
  }

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))

// create new Set for unqiue only values

function mxdiflg(a1, a2) {
    if(a1 == null || a2 == null || a1.length < 1 || a2.length < 1){
      return -1;
    }
      let maxA1 = a1[0];
      let minA1 = a1[0];
      let maxA2 = a2[0];
      let minA2 = a2[0];
      for(let i = 0; i<a1.length; i++){
          maxA1 = maxA1.length < a1[i].length ? a1[i] : maxA1;
          minA1 = minA1.length > a1[i].length ? a1[i] : minA1;
      }
      for(let i = 0; i<a2.length; i++){
          maxA2 = maxA2.length < a2[i].length ? a2[i] : maxA2;
          minA2 = minA2.length > a2[i].length ? a2[i] : minA2;
      }
      let maxDiff = (maxA1.length-minA2.length) > (maxA2.length-minA1.length) ? (maxA1.length-minA2.length) : (maxA2.length-minA1.length);
  
      return maxDiff;
  }

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))



function noBoringZeros(n) {
    while(n%10 === 0){
        n /= 10;
       // console.log(n)
    }
    return n;
  }

console.log(noBoringZeros(96000))


function capitalize(s){
    let evenUpper = s.toLowerCase().split('');
    let oddUpper = s.toLowerCase().split('');
    for(let i = 0; i<s.length; i++){
        if(i % 2 === 0){
            evenUpper[i] = evenUpper[i].toUpperCase();
        }
        if(i % 2 === 1){
            oddUpper[i] = oddUpper[i].toUpperCase();
        }
    }
    return [evenUpper.join(''),oddUpper.join('')];
  };

console.log(capitalize("abcdef"))



function hexToDec(hexString){
    return parseInt(hexString, 16);
  }



  function checkExam(array1, array2) {
    let points = 0;
    for(let i = 0; i<array1.length; i++){
        if(array2[i] == ""){
            points += 0;
        } else if(array1[i] === array2[i]){
            points += 4;
        } else {
            points -= 1;
        }
    }
    if(points < 0){
        points = 0;
    }
    return points;
   }

console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))



function rowWeights(array){
    let sumOdd = 0;
    let sumEven = 0;
    for(let i = 0; i<array.length; i++){
        if(i%2 === 0){
            sumEven += array[i]
        } else {
            sumOdd += array[i]
        }
    } return [sumEven,sumOdd];
  }

console.log(rowWeights([70,58,75,34,91]))
  

function noOdds(array){
    return array.filter((a) => a%2 === 0);
  }

console.log(noOdds([0,1,2,3]))



function largestPairSum (numbers) {
    numbers.sort((a,b) => b-a);
    return (numbers[0] + numbers[1]);
  }

console.log(largestPairSum([-100,-29,-24,-19,19]))


// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    let suite = card.replace(/[^♣♦♥♠]/g,'');
    switch(suite){
        case '♣':
            return 'clubs';
        case '♦':
            return 'diamonds';
        case '♥':
            return 'hearts';
        case '♠':
            return 'spades';
        default:
            return 'invalid';
    }
  }

console.log(defineSuit('Q♠'))


function factorial(n){
    if(n < 0){
        throw RangeError('not in range');
    }
  let sum = 1;
  for(let i = 1; i <=n; i++){
    sum *= i;
  }
  return sum;
}

console.log(factorial(-1))


function lookSay(number){
    number = number.toString().split('');
    let arr = [];
    for(let i = 0; i<number.length; i++){
        if(number[i] == number[i-1] && i > 0){
            arr[arr.length-1] += number[i];
        } else {
            arr.push(number[i]);
        }
    }
    let finalArr =[]
    for(let i = 0; i<arr.length; i++){
        finalArr[i] = arr[i].length + arr[i][0];
    }

    return Number(finalArr.join(''));
  }

console.log(lookSay(22322))



function twoDecimalPlaces(n) {
   return Number(n.toFixed(2));
  }

console.log(twoDecimalPlaces(23.2342))

function array(arr){
    arr = arr.split(',');
    if(arr.length <= 2){
        return null;
    }
    arr.pop();
    arr.shift();
    return String(arr.join(' '));
    }

console.log(array('1,11,2,3,23,4,5'))



function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))

function spEng(sentence){
    return /(english)/i.test(sentence)
    }

console.log(spEng("ergenglish"))



multiplicationTable = function(size) {
    let arr = [];
    for(let i = 0; i<size; i++){
        arr[i] = [];
        for(let j = 0; j<size; j++){
            arr[i][j] = (i+1)*(j+1);
        }
    }
    return arr;
  }

  console.log(multiplicationTable(3))
  
  */

  function bump(x){
    let bumps = x.replace(/_/g,'').length;
    return bumps <= 15 ? 'Woohoo!' : 'Car Dead';
  }

  console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"))
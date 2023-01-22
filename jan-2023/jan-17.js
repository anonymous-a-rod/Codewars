/*

function chromosomeCheck(sperm) {
  if(sperm ==='XY'){
    return "Congratulations! You're going to have a son.";
  } else if (sperm === 'XX'){
    return "Congratulations! You're going to have a daughter.";
  } else {
    return'Invalid Input';
  }
}

console.log(chromosomeCheck('XX'))



function stringClean(s){
    return s.replace(/[0-9]/g, "");
  }

console.log(stringClean('This looks5 grea8t!'))



function position(letter){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let index = alphabet.indexOf(letter.toLowerCase())+1;
    return index === 0? 'Invalid Input' : `Position of alphabet: ${index}`;
    }

console.log(position('f'))

function dutyFree(normPrice, discount, hol){
    let count = 0;
    while(hol > 0){
        hol -= (normPrice*(discount/100));
        count++
    }
    if(holiday < 0){
        count--;
    }
    return count;
}

console.log(dutyFree(17, 10, 500))



function doors(n){
  let doors = Array(n).fill(0);

  for(let i = 0; i<n; i++){
    for(let j = i; j<n; j += i+1){
        doors[j] = toggle(doors[j]);
    }
  } return doors.reduce((a,b) => a+b);
}

function toggle(status){
  return status === 1? 0 : 1;
}

console.log(doors(5))

function angle(n) {
  return (n-2) * 180;
}

function nbDig(n, d) {
  let digit = 0;
  let count = 0;
  while(digit <= n){
    let digitSqd = digit**2;
    let arr = String(digitSqd).split('');
    for(let i = 0; i<arr.length; i++){
      if(arr[i] == d){
        count++;
      }
    }
    digit++;
  }
  return count;
}

console.log(nbDig(11011,2))

*/
/*

let maxSequence = function(arr){
    if(arr == null || arr.length < 1){
        return 0;
    }
    let max = arr[0];
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){

            if(j === arr.length-1 && i === arr.length-1){
                if(arr[j] > max){
                    max = arr[j];
            }} else {
                if((arr.slice(i,j+1).reduce((a,b) => a+b,0)) > max){
                    max = (arr.slice(i,j+1).reduce((a,b) => a+b,0));
                }
                if((arr.slice(arr.length-1-j,arr.length-i).reduce((a,b) => a+b,0)) > max){
                    max = (arr.slice(arr.length-1-j,arr.length-i).reduce((a,b) => a+b,0));
                }
            }
        }
    }
    return max;
  }

  
 // console.log(arr.slice(arr.length,arr.length).reduce((a,b) => a+b))
console.log(maxSequence([-2,1,-3,4,-1,2,1,-5,4]))



const intro = document.getElementById('intro');
const firstName = 'Aaron';
const lastName = 'Venema';
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'Java', 'Python'];
const hobbies = ['codewars', 'cycling', 'language learning', 'podcasts'];
const attributes = ['hard work ethic', 'creativity', 'problem solving']; 

function introduction(firstName, lastName, skills, hobbies, attributes) {
   return `My name is ${firstName} ${lastName}, some of my hobbies include ${hobbies.join(', ')} and 
   I have fundamental knowledge in ${skills.join(', ')}. I believe given my existing skillsets and
   my ${attributes.join(', ')}, I can be a valuable member of your team.`;
};

intro.innerHTML = introduction(firstName, lastName, skills, hobbies, attributes);  



function getSize(width, height, depth){
    return [2*(width*depth+height*depth+height*width), (width*height*depth)]
}

console.log(getSize(4,2,6))



// C = 2 π r
// r = C / 2 π

// quarter circle
// // r = C*4 / 2 π


function squareArea(A){
  return (((A*4)/(Math.PI*2))**2);
}

console.log(squareArea(2))

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let sum = 0;
    let ages = [age1, age2, age3, age4, age5, age6, age7, age8];
    for(let i = 0; i<ages.length; i++){
        sum += (ages[i])**2;
    }
    return Math.floor(Math.sqrt(sum)/2);
  }

console.log(predictAge(65,60,75,55,60,63,64,45))

function _if(bool, func1, func2) {
    if(bool){
      func1();
    } else {
      func2();
    }
  }

  

  function order(words){
    words = words.split(' ');
    let arr = [];
    for(let i = 0; i<words.length; i++){
        let index = words[i].replace(/[^0-9]/gi,'')-1;
        arr[index] = words[i];
    }
    return arr.join(' ');
  }

  console.log(order("is2 Thi1s T4est 3a"));

  function  calculateAge(birthYear, currentYear) {
    if(birthYear > currentYear){
        return `You will be born in ${birthYear-currentYear} year${birthYear-currentYear === 1?"":"s"}.`;
    } else if (birthYear === currentYear) {
        return `You were born this very year!`;
    } else {
        return `You are ${currentYear-birthYear} year${currentYear-birthYear === 1?"":"s"} old.`;
    }
    }

console.log(calculateAge())

function whatday(num) { 

    switch(num){
        case 1:
            return 'Sunday';
        case 2:
            return 'Monday';
        case 3:
            return 'Tuesday';
        case 4:
            return 'Wednesday';
        case 5:
            return 'Thursday';
        case 6:
            return 'Friday';
        case 7:
            return 'Saturday';
        default:
            return 'Wrong, please enter a number between 1 and 7';

    }
  }

   */

 
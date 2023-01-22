/*
function replace(s){
   return s.replace(/[aeiou]/gi,"!");    
  }

console.log(replace("aeiou"))



function sumOfMinimums(arr) {
    let mins = [];
    for(let i = 0; i<arr.length; i++){
        mins[i] = Math.min(...arr[i])
    }
    return mins.reduce((a,b) => a+b);
  }

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))



function deleteNth(array,n){
    let arr = [];
    let count;
    for(let i = 0; i<array.length; i++){
        count = arr.filter(a => a == array[i]).length;
        if(count < n){
            arr.push(array[i]);
        }
    }
    return arr;
  }

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 2))



function hello(name) {
    if(typeof name != 'string' || name == ''){
      return 'Hello, World!';
    }
      name = name.toUpperCase().slice(0,1) + name.toLowerCase().slice(1)
      return `Hello, ${name}!`;
    }

console.log(hello("aaRon"))


function toBinary(n){
    let bi = '';
    while(n > 0){
        (n%2 != 0)? bi += '1' : bi += '0';
        n = Math.floor(n/2);       
    }
    return Number(bi.split('').reverse().join(''));
  }

console.log(toBinary(2))


function toBinary(n){
    return n.toString(2);
    // .toString(2) converts a number to binary. 
  }

console.log(toBinary(2))



function remainder(n, m){
    return n > m ? n%m : m%n;
  }

console.log(remainder(17, 5))



function peopleWithAgeDrink(age) {
    if(age < 14){
        return "drink toddy";
    } else if (age < 18){
        return "drink coke";
    } else if (age < 21){
        return "drink beer";
    } else {
        return "drink whisky";
    }
  };
  
  */
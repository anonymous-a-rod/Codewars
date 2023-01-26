/*

function lowercaseCount(str){
    return str.length - str.replace(/[a-z]/g,'').length; 
}

console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))


function isVow(a){
    for(let i = 0; i<a.length; i++){
        if(/[aeiou]/i.test(String.fromCharCode(a[i]))){
            a[i] = String.fromCharCode(a[i]);
        }
    }
    return a;
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))


function toCsvText(array) {
    for(let i = 0; i<array.length; i++){
        array[i] = array[i].join(', ')
    }
    return array.join('\n');
 }

 console.log(toCsvText([[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]))


    function truncateString(str, num) {
        if(num >= str.length){
            return str;
        } else if(num <= 3){
            return str.slice(0,num) + '...';
        } else if (str.length >= num) {
            return str.slice(0,num-3) + '...';
        } else {
            return str;
        }
      }

    console.log(truncateString('d3X COuPOiqiNpzwHZGSg7yLZWAGtZp414', 34))


    function toJadenCase(str) {

        let arr = str.toLowerCase().split(' ');
        for(let i = 0; i<arr.length; i++){
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
        return arr.join(" ");
      };

    console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))

   // my first code attempt is actually correct, but there's an error with the solution, second solution was accepted. 

    function findLongest(array){
        let min = Math.min(...array);
        let max = Math.max(...array);
        return (Math.abs(min) > max) ? min : max;
      }

    console.log(findLongest([9000, 8, -800]))

 
    function findLongest(array){
        let max = String(array[0])
        for(let i = 1; i<array.length; i++){
            if(String(array[i]).length > max.length){
                max = String(array[i])
            }
        }
        return Number(max);
      }

    console.log(findLongest([9000, 8, -800]))


function heron(a, b, c) {
    let s =(a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
  }

console.log(heron(3,4,5))

*/

let greet = function(name) {
    name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return "Hello " + name +"!";
};
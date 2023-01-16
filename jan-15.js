/*

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    // Finish this :)
    return Math.trunc((year-1)/100)+1;
  }

console.log(century(1901))

// Math.ceil to round up .. instead of Math.trunc


// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map((a) => a*2);
}

console.log(maps([1, 2, 3]))



// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    return parseInt(inputString);
    }

console.log(getAge("9 years old"))



// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
    return (n>=10)? "Great, now move on to tricks" : "Keep at it until you get it";
 }

 console.log(hoopCount(10))
 
 

//  In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
    let str = (s.match(/[^a-m]/g) === null)? 0: s.match(/[^a-m]/g).length;
    return `${str}/${s.length}`;
}

console.log(printerError("aaabbbbqzxhaijjjm"))



// 7 Wonders
// 7 Wonders is a board game that consists of building your city, gathering resources and fighting your neighbors.

// One part of the game is also to research science in order to gain points at the end of the game. There are 3 types of science glyphs you can gather:

// Compasses
// Gears
// Tablets
// The way points are added up works as described here:

// Step 1
// Each distinct set of three different glyphs is worth 7 points.

// 1 Compass, 1 Gear and 1 Tablet is 7 points.

// 2 Compasses, 1 Gear and 1 Tablet is still 7 points.

// Note that a distinct set of three different glyphs means 1 Compass, 1 Gear and 1 Tablet. No more, no less!

// Step 2
// The amount of each glyph you own is squared and then summed up.

// 1 Compass, 1 Gear and 1 Tablet is 3 points.

// 2 Compasses, 1 Gear and 1 Tablet is 6 points.

// Finally
// The total science points is equal to the sum of the two steps.

// 1 Compass, 1 Gear and 1 Tablet is finally 10 points.

// 2 Compasses, 1 Gear and 1 Tablet is finally 13 points.

// You will be given 3 inputs corresponding to the amount of each glyph you have acquired in the game. Your task is to output the final score. Take into account that you may have no glyphs at all!

function solve(compasses, gears, tablets) {
    let glyphs = [compasses, gears, tablets];
    let step1 = glyphs.sort((a,b) => a-b)[0]*7;
    let step2 = glyphs.map(a => a**2).reduce((a,b) => a+b);
    return step1 + step2;
  }

console.log(solve(3,5,1))



// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
    return (name === owner)? 'Hello boss' : 'Hello guest';
  }
  


//   If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let str = "";
    for(let i=0; i<num; i++){
        str += `${i+1} sheep...`
    }
    return str;
  }

console.log(countSheep(4))



// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]


function tribonacci(signature,n){
    for(let i=3; i<n; i++){
        signature[i] = signature[i-1] + signature[i-2] + signature[i-3];
    }
    return signature.slice(0,n);
  }

  console.log(tribonacci([15,4,12], 30))
  
  

//   Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let counter = 0;
    while(num >= 10){
        counter++
        
        let sum = 1;
        while(num > 0){
            sum *= num%10;
            num = Math.trunc(num/10);
        }
        num = sum;
    }
    return counter;
 }

 console.log(persistence(39))



 function findAverage(array) {
    return array.length === 0? 0: array.reduce((a,b)=> a+b)/array.length;
  }

  console.log(findAverage([1,1,1])) 
  
 

//   A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
    return (bullets/dragons >= 2)? true : false;
    }

console.log(hero(10,5)) 



// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle



function otherAngle(a, b) {
    return 180-a-b;
  }

console.log(otherAngle(30,60))

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    url = url.replace("http://","").replace("https://","").replace("www.","")
    let index = url.indexOf('.');
    return url.slice(0,index);
  }

console.log(domainName("http://github.com/carbonfive/raygun"))

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number=function(array){
    for(let i=0; i<array.length; i++){
        array[i] = `${i+1}: ${array[i]}`
    }
    return array
  }

console.log(number(["a", "b", "c"]))



// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    let [n,e,s,w] = [0,0,0,0]
    for(let i=0; i<walk.length; i++){
        if(walk[i] === 'n'){
            n++;
        } else if(walk[i] === 'e'){
            e++;
        } else if(walk[i] === 's'){
            s++;
        } else if(walk[i] === 'w'){
            w++;
        }
        // could've used a switch statement
    }
    return ((n-s) === 0) && ((e-w) === 0) && walk.length === 10;
  }

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))



// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    let arr = [];
    for(let i=0; i<iterable.length; i++){
        if(!(arr[arr.length -1] === iterable[i])){
            arr.push(iterable[i])
        }
    }
    return arr;
  }

console.log(uniqueInOrder('AAAABBBCCDAABBB'))

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor (base, factor) {
    return base%factor === 0
  }

console.log(checkForFactor(63,7))

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


function removeSmallest(numbers) {
    let array = [...numbers];
    let smallest = array.sort((a,b) => a-b);
    let index = numbers.indexOf(smallest[0]);
    if(index === 0){
        numbers = numbers.slice(1)
    } else if (index === numbers.length-1){
        numbers = numbers.slice(0,numbers.length-1)
    } else {
        numbers = numbers.slice(0, index).concat(numbers.slice(index+1,numbers.length));
    }
    return numbers;
  }

console.log(removeSmallest([3, 9, 1, 2, 0, 3, 4, 5, 3]))

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf("needle")}`;
  }

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.




function correct(string)
{
	return string.replaceAll("5","S").replaceAll("0","O").replaceAll("1","I")
}

console.log(correct("51NGAP0RE"))

// Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

function greet(){
    return "hello world!";
  } 
  console.log(greet());


//   Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
    return dna.replaceAll("T", "U");
  }

console.log(DNAtoRNA("GACCGCCGCC"))


// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3n 
// 3
//  , the cube above will have volume of (n−1)3 (n-1)^3(n−1) 
// 3
//   and so on until the top which will have a volume of 13 1^31 
// 3
//  .

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n3+(n−1)3+(n−2)3+...+13=m n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = mn 
// 3
//  +(n−1) 
// 3
//  +(n−2) 
// 3
//  +...+1 
// 3
//  =m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
    let count = 0;
    let sum = 0;
    while(sum < m){
        count++;
        sum += (count)**3
    }
    return sum === m? count: -1;
}

console.log(findNb(1071225))

  

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends){
    return friends.filter((word) => word.length === 4);
  }

console.log(friend(["Ryan", "Kieran", "Mark"]))




// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    if(((pin.length !==6) && (pin.length !==4)) || pin<0){
        return false;
    }
    if(parseInt(pin) != pin){
        return false;
    }
    pin = pin.replace(/\D/g,'')
    if(((pin.length !==6) && (pin.length !==4))){
        return false;
    }
    return true;
  }

console.log(validatePIN('1234'))

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    numbers.sort((a,b) => a-b)
    return numbers[0] == numbers[1]? numbers[numbers.length-1] : numbers[0];
  }

console.log(stray([17, 17, 3, 17, 17, 17, 17]))


// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    let sameFirst = beast[0] === dish[0];
    let sameLast = beast[beast.length-1] === dish[dish.length-1];
    return sameFirst && sameLast;
    }

console.log(feast("great blue heron", "garlic naan"))



// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
    return words.join(' ');
 };

 console.log(smash(['hello', 'world', 'this', 'is', 'great']))

//  Return the number (count) of vowels in the given string.

//  We will consider a, e, i, o, u as vowels for this Kata (but not y).
 
//  The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }

console.log(getCount('abracadabra'))

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0

function finalGrade (exam, projects) {
    if(exam>90 || projects>10){
        return 100
    } else if(exam>75 && projects>=5){
        return 90
    } else if(exam>50 && projects>=2){
        return 75
    } else {
        return 0
    }
  }

  console.log(finalGrade(100,12))

//   ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    message = message.split('')

    for(let i=0; i<message.length; i++){
        if(letters.includes(message[i])){
            let index = letters.indexOf(message[i])+13
            if(index >= 26){
                index -= 26;
            }
            message[i] = letters[index];
        }
        if(lettersUpper.includes(message[i])){
            let index = lettersUpper.indexOf(message[i])+13
            if(index >= 26){
                index -= 26;
            }
            message[i] = lettersUpper[index];
        }
    }

    return message.join('')
  }

  console.log(rot13("Uv Xryyl! Ubcr lbh'er univat n terng jrrxraq. Ubj'f PungTCG orra tbvat sbe lbh? orra urycshy jvgu lbhe jrofvgr? V'z ybbxvat sbejneq gb trggvat fgnegrq ba gur tebhc cebwrpg. Ubcr lbh'er rawblvat lbhe inpngvba"));


//   The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
    return Math.trunc((30/1.08) *s);
  }

console.log(cockroachSpeed(1.08))


// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));



// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
    if(array.length === 0){
        return 'even'
    }
    let sum = array.reduce((a,b) => a+b);
    return sum%2 === 0? 'even': 'odd';
 }

console.log(oddOrEven([]))


// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
  let isEven = s.length%2 === 0? true : false;
  let middle = Math.trunc(s.length/2);
  let gap = 0;
  if(isEven){
    gap--;
  }
  let newWord = s.slice(middle+gap, middle+1);
  return newWord;
}

console.log(getMiddle("a"))


// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
    return a.includes(x);
  }

console.log(check([101, 45, 75, 105, 99, 107], 107))



// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter){  
    return str.split('').filter((a) => a == letter).length;
  }

console.log(strCount('Hello','l'))

// can also use .match and regex


// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((dadYearsOld/2 - sonYearsOld)*2)
  }

console.log(twiceAsOld(36,7))


// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    let arr = []
    for(let i=a; i<=b; i++){
        arr.push(i);
    }
    return arr;
  }

console.log(between(1,4))

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

function greet(language) {
    let greetings = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    let greeting = greetings[language.toLowerCase()]
	return greeting === undefined? greetings.english: greeting;
}

console.log(greet('engsh'))

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.



function howMuchILoveYou(nbPetals) {
    let number = (nbPetals-1)%6;
    let arr = ["I love you","a little","a lot","passionately","madly","not at all"];
    return arr[number];
}

console.log(howMuchILoveYou(7))



// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
    let sum = a+b;
    let binary = ''
    do{
        console.log(sum);
        binary += sum%2 == 0? '0':'1';
        sum = Math.trunc(sum/2);
         
    }while(sum>0)
    return binary.split('').reverse().join('');
}

console.log(addBinary(5,9))



// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
   let arr = [a,b,c];
   arr.sort((a,b) => a-b);
   return (arr[0] + arr[1]) > arr[2]? true: false;
}

console.log(isTriangle(10, 9,2))


// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
	return string.split(' ');
}

console.log(stringToArray("Robin Singh"))


// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
    return String(Number(a)+Number(b));
}

console.log(sumStr("","3"))



// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
    return String(b)
  }

console.log(booleanToString(true))



function solution(num) {
    if (num >= 4000) {
      return "Too large";
    } else if (num < 1) {
      return "Too small";
    }
    let romanNumerial = "";
    let remaining = num;
    if (remaining >= 1000) {
      romanNumerial += "M".repeat(remaining / 1000);
      remaining %= 1000;
    }
    if (remaining >= 900) {
      romanNumerial += "CM".repeat(remaining / 900);
      remaining %= 900;
    }
    if (remaining >= 500) {
      romanNumerial += "D".repeat(remaining / 500);
      remaining %= 500;
    }
    if (remaining >= 400) {
      romanNumerial += "CD".repeat(remaining / 400);
      remaining %= 400;
    }
    if (remaining >= 100) {
      romanNumerial += "C".repeat(remaining / 100);
      remaining %= 100;
    }
  
    if (remaining >= 90) {
      romanNumerial += "XC".repeat(remaining / 90);
      remaining %= 90;
    }
    if (remaining >= 50) {
      romanNumerial += "L".repeat(remaining / 50);
      remaining %= 50;
    }
    if (remaining >= 40) {
      romanNumerial += "XL".repeat(remaining / 40);
      remaining %= 40;
    }
  
    if (remaining >= 10) {
      romanNumerial += "X".repeat(remaining / 10);
      remaining %= 10;
    }
    if (remaining >= 9) {
      romanNumerial += "IX".repeat(remaining / 9);
      remaining %= 9;
    }
    if (remaining >= 5) {
      romanNumerial += "V".repeat(remaining / 5);
      remaining %= 5;
    }
    if (remaining >= 4) {
      romanNumerial += "IV".repeat(remaining / 4);
      remaining %= 4;
    }
    if (remaining >= 1) {
      romanNumerial += "I".repeat(remaining / 1);
      remaining %= 1;
    }
  
    return romanNumerial;
  }
  
  
  console.log(solution(36));

 

//   Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

console.log(goals(43,10,5))



// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
    let arr = [];
    let count = 0;
    while(arr.length < array.length){
        for(let i=0; i<array.length; i++){
            if(array[i].length == count){
                arr.push(array[i])
                console.log(array[i])
            }
        }
        count++;
    }
    return arr;
  };

console.log(sortByLength(["Beg", "Life", "I", "To"]))

// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

function numberToPower(number, power){
    if(power === 0){
        return 1;
    }
    sum = number;
    for(let i= 1; i<power; i++){
        sum *= number
    }
    return sum;
  }

  console.log(numberToPower(4,2))

//   The Collatz Conjecture states that for any positive natural number n, this process:

// if n is even, divide it by 2
// if n is odd, multiply it by 3 and add 1
// repeat
// will eventually reach n = 1.

// For example, if n = 20, the resulting sequence will be:

// [ 20, 10, 5, 16, 8, 4, 2, 1 ]
// Write a program that will output the length of the Collatz Conjecture for any given n.
// In the example above, the output would be 8.

function collatz(n) {
    let arr = [n];
    while(arr[arr.length-1]>1){
        if(arr[arr.length-1]%2 == 0){
            arr.push(arr[arr.length-1]/2)
        }
        else if(arr[arr.length-1]%2 != 0){
            arr.push(arr[arr.length-1]*3+1)
        }

    }
    return arr.length;
  }

console.log(collatz(20))

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    let regex = /[^a-z]/gi;
    text = text.replace(regex,"").toLowerCase();
    let alphabet = {
        "a":1,
        "b":2,
        "c":3,
        "d":4,
        "e":5,
        "f":6,
        "g":7,
        "h":8,
        "i":9,
        "j":10,
        "k":11,
        "l":12,
        "m":13,
        "n":14,
        "o":15,
        "p":16,
        "q":17,
        "r":18,
        "s":19,
        "t":20,
        "u":21,
        "v":22,
        "w":23,
        "x":24,
        "y":25,
        "z":26,
    }
    text = text.split('')
    for(let i=0; i<text.length; i++){
        text[i] = alphabet[text[i]] 
    }
    return text.join(' ');
  }

console.log(alphabetPosition("The sunset sets at twelve o' clock."))




// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0;
  } else {
    return n*m;
  }
}

console.log(paperwork(5,5))

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
    if(n <= 0){
        return n;
    } else if(n>=14){
        return n-2;
    } else if(n>=1){
        return n-1;
    }
}

console.log(getRealFloor(14))

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    let arr = [];
    word = word.toLowerCase().split('');
        for(let i=0; i<word.length; i++){
            arr[i] = '(';
            for(let j=0; j<word.length; j++){
                if((i != j)&&(word[i] == word[j])){
                    arr[i] = ')';
                }
            }
        }
    return arr.join('');
}

console.log(duplicateEncode("recede"))



// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n){
    if(n%2 === 0 || typeof n !== 'number' || n == '' || n <= 0){
        return null;
    }
    let str = ""
    for(let i=1; i<=n; i +=2){
        str += " ".repeat(Math.trunc((n-i)/2)) + "*".repeat(i)+ "\n"  
    }
    for(let i=n-2; i>0; i -=2){
        str += " ".repeat(Math.trunc((n-i)/2)) + "*".repeat(i)+ "\n" 
    }
    return str;
  }

console.log(diamond(113))

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    for(let i=0; i<n; i++){
        z[i] = x *(i+1)
    }
    return z;
  }

console.log(countBy(1,10))

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    s= s.split(' ');
    let shortest = s[0];
    for(let i=0; i<s.length; i++){
        if(s[i].length < shortest.length){
            shortest = s[i];
        }
    }
    return shortest.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));



function sumMix(x){
let sum = 0
x.forEach(a => {
    sum += parseInt(a);
});
return sum;

}

console.log(sumMix([9, 3, '7', '3']));

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    if(nums == null || nums.length < 1){
      return []
    }
      return nums.sort((a,b) => a-b)
  }

console.log(solution([1,2,3,10,5]))



// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function(n){
    if(n < 0){
        return false;  
    }
    let sqrt = Math.trunc(Math.sqrt(n));
    return (sqrt**2 === n); // fix me
  }

console.log(isSquare(9))

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
    return string.replace(/[aeiou]/g,"");
  }

console.log(shortcut('retwery'))

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
   return n%2 == 0;
}

console.log(testEven(5))

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

function sayHello(name) {
    return 'Hello, ' + name
  }

  function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

//   Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
    let arr = [];
    for(let i=0; i<word.length; i++){
        if(/[A-Z]/.test(word[i])){
            arr.push(i);
        }
    }
	return arr;
};

console.log(capitals('CodEWaRs'))



function nbYear(p0, percent, aug, p) {
    let count = 0;
    while(p0 < p){
        p0 += Math.trunc(p0*(percent/100) +aug);
        count++;
    }
    return count;
}

console.log(nbYear(1000, 2, 50, 1200));


// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

function titleCase(title, minorWords) {
    if(typeof minorWords != 'undefined'){
      minorWords = minorWords.toLowerCase().split(' ');
    }
    title = title.split(' ');
    for(let i=0; i<title.length; i++){
      title[i] = title[i].toUpperCase().slice(0,1) + title[i].toLowerCase().slice(1)
    }
    if(typeof minorWords != 'undefined'){
        for(let i=1; i<title.length; i++){
            for(let j=0; j<minorWords.length; j++){
                if(title[i].toLowerCase() === minorWords[j]){
                    title[i] = minorWords[j];
                }
            }
        }
    }
    return title.join(' ');
  }

console.log(titleCase('a clash of KINGS', 'a an the of'))

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    let string = str.split(' ');

    for(let i = 0; i<string.length; i++){
        string[i] = string[i].split('').reverse().join('');
        console.log(string[i]);
    }
    return string.join(' ');
  }

  console.log(reverseWords("This is an example!"))

//   In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
    return list.reverse();
}

console.log(reverseList([1, 2, 3, 4]))
*/

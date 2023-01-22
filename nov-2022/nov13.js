// Number of People in the Bus

var number = function(busStops){

    let people = 0;
    for(i=0; i<busStops.length; i++){
      people += busStops[i][0] 
      people -= busStops[i][1]
    }
    return people

}

// Opposite number

function opposite(number) {
  return number*-1
}

// Is it a palindrome?

function isPalindrome(x) {
  newStr = ""
  x = x.toLowerCase()
  for(i=x.length-1; i>=0; i--){
    newStr += x[i]
  } 
  if(x === newStr){
    return true
  } return false
}
function reverse(word){
  //'abc' => 'cba'
const wordArray = word.split("")
const reversedWordArray =  wordArray.reverse();
const reversedWord = reversedWordArray.join("")
return reversedWord;
}


function isPalindrome(word) {
  const reversedWord = reverse(word);
  return word === reversedWord
   
}

/* 
  Add your pseudocode here
// make a function that returns true if a word is a palindrome and false if not
  //This means that if a word is reversed it is still the same word
  // i.e dad === dad //=> true  , abcd === dcba //=> false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("")

}

module.exports = isPalindrome;

  


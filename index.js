function isPalindrome(word) {
  // Write your algorithm here
  const stringArray = word.split('');
  const reversedstringArray = stringArray.reverse();
  const reversedWord = reversedstringArray.join('');

  if (reversedWord === word) {
    return true;

}else{
  return false;
}
}

/* 
  Add your pseudocode here
  create a new function that takes a string and returns  reversed string
  write a function to reverse the string
  write conditional statement
  
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
}

module.exports = isPalindrome;

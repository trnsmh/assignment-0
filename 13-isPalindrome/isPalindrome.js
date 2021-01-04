function isPalindrome(word) {
  // Insert code here;
  word = word.toLowerCase()

  var wordtemp = word.split('');

  wordtemp.reverse();

  var wordarr = word.split('');

  for(var i=0; i<word.length;i++){
    if(wordarr[i] != wordtemp[i]){
      return false;
    }
  }
  return true;
 
}

// Do not edit this line;
module.exports = isPalindrome;
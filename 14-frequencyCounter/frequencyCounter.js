function frequencyCounter(word) {
  // Insert code here;
  word.split('');
  
  let hash = new Map();
  for(var i=0; i<word.length; i++){
    if(!hash.has(word[i])){
      hash.set(word[i],1)      
    }
    else
    hash.set(word[i],hash.get(word[i])+1);
  }
  var obj ={}
  for(var j=0;j<word.length;j++){
    obj [word[j]] = hash.get(word[j]);
  }
  return obj
}

// Do not edit this line;
module.exports = frequencyCounter;
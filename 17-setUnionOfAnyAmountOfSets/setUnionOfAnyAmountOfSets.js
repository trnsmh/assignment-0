function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
let mySet = new Set()
for(var i=0; i<arguments.length;i++){
  for (let elem of arguments[i]){
    mySet.add(elem);
  }
}
  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
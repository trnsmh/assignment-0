function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var product=1;
  for(var i=0;i<arguments.length;i++){
    product*=arguments[i];
  }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
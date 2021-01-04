function pairSum(nums, target) {
  // Insert code here;
  var sum =0;
  if(nums.length<=1){
    throw 'array lenght is short';
  }
  for(var i=0;i<nums.length;i++){
    for(var j=i+1;j<nums.length;j++){
      sum = nums[i]+nums[j];
      if(sum==target){
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
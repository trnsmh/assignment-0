function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var min=nums[0], max=min;
  for(var i=1;i<nums.length;i++){
    if(nums[i]<=min){
      min=nums[i];
    }  
    else if(nums[i]>=max){
      max=nums[i];
    }
  }
  return min+max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
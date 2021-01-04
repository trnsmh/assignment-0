class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;


    if (nums.length === 1){
      if (nums[0] === target){
   
        return true;
      }
      else {
        
        return false;
      }
    }
    
    let temp = [];
    var high = nums.length;

    var mid = Math.floor((high) / 2);

    if (nums[mid] === target){
      
      return true;
    }
    else if (target > nums[mid]){
      if(high <= mid+1){
        
        return false;
      }

      else{
        for (var i = mid+1; i < high; i++){
          temp.push(nums[i]);
        }
        this.binarySearch(temp, target);
      }
    }
    
    
    else if (nums[mid] > target){
      for (var j = 0; j < mid; j++){
        temp.push(nums[j])
      }
      this.binarySearch(temp, target);
    }

    
  }
  
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
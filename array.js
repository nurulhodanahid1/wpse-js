var nums = [55, 45, 35, 25, 15, 75];
for(var i = 0; i < nums.length; i++){
    var element = nums[i];
    console.log(element);
}

nums.push(66);
console.log(nums);
nums.shift();
console.log(nums);
nums.pop();
console.log(nums);


var numbers = [1,2,3,4,5];
var result = numbers.slice(2,4);
console.log(result);
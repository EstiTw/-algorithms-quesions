/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */

const kthLargestNumber = function (nums, k) {
  nums.sort((a, b) => (BigInt(b) - BigInt(a) > 0 ? 1 : -1));

  return nums[k - 1];
};

/*
(a, b) => (BigInt(b) - BigInt(a) > 0 ? 1 : -1) INSTEAD: (a, b) => (BigInt(b) - BigInt(a))
Explanation:  JavaScript sort method requires a function as a parameter that can compare two elements of the array and return either a positive number, or a negative number or zero. **Number is the keyword here**.
**BigInt operations like addition and subtraction returns BigInt type and not a Number type**. And that's why the error you are getting.*/

//shorter solution:
//var kthLargestNumber = (nums, k) => nums.map(BigInt).sort((a,b)=>b-a>=0?1:-1)[k-1]+"";

// 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

//  * @param {number[]} nums
//  * @return {number[]}

var runningSum = function (nums) {
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    arr.push(nums[i] + arr[i - 1]);
  }
  return arr;
};

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
var defangIPaddr = function (address) {
  let str = '';
  let arr = address.split('');

  for (let letter of arr) {
    if (letter === '.') {
      str += `[${letter}]`;
    } else {
      str += letter;
    }
  }
  return str;
};

// Given the array candies and the integer extraCandies, where candies[i]
//  represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or
//  she can have the greatest number of candies among them.
// Notice that multiple kids can have the greatest number of candies.
var kidsWithCandies = function (candies, extraCandies) {
  let max = candies[0];
  let arr = [];

  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }
  for (let j = 0; j < candies.length; j++) {
    if (candies[j] + extraCandies >= max) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
};

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
var shuffle = function (nums, n) {
  let arr = [];
  for (let i = 0; i < (nums.length - 1) / 2; i++) {
    arr.push(nums[i]);
    arr.push(nums[i + n]);
  }
  return arr;
};

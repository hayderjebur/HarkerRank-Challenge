string = 'abcdefghijklmnopqrstuvwxyz';
//make an array 10 items [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
let x = Array.from(Array(10).keys());

// expected output: 3
const array1 = [1, 3, 2];
console.log(Math.max(...array1));

// Letter as Array
alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
//letter as object
letterValue = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

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

// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.
// /**
//  * @param {number} big
//  * @param {number} medium
//  * @param {number} small
//  */
var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

ParkingSystem.prototype.addCar = function (carType) {
  if (this.big > 0 && carType == 1) {
    this.big--;
    return true;
  }
  if (this.medium > 0 && carType == 2) {
    this.medium--;
    return true;
  }
  if (this.small > 0 && carType == 3) {
    this.small--;
    return true;
  } else return false;
};

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
//That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var smallerNumbersThanCurrent = function (nums) {
  let arr = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) count++;
    }
    arr[i] = count;
    count = 0;
  }

  return arr;
};
//1342. Number of Steps to Reduce a Number to Zero
// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even,
// you have to divide it by 2, otherwise, you have to subtract 1 from it.Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2,
//  otherwise, you have to subtract 1 from it.
// /**
//  * @param {number} num
//  * @return {number}
//  */
var numberOfSteps = function (num) {
  let count = 0;
  while (num !== 0) {
    if (num % 2 == 0) {
      num = num / 2;
      count++;
    } else {
      num--;
      count++;
    }
  }
  return count;
};

// 1528. Shuffle String
// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.
var restoreString = function (s, indices) {
  let arrString = s.split('');
  let letters = [];

  for (let i = 0; i < arrString.length; i++) {
    letters[indices[i]] = s.charAt(i);
  }
  return letters.join('');
};
// 1221. Split a String in Balanced Strings
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it in the maximum amount of balanced strings.
// Return the maximum amount of split balanced strings.
var balancedStringSplit = function (s) {
  let result = 0,
    countL = 0,
    countR = 0;
  for (let char of s) {
    if (char === 'R') countR++;
    if (char === 'L') countL++;
    if (countR === countL) result++;
  }
  return result;
};

// Sliding Windiw Technique
function arrayMaxConsecutiveSum(arr, num) {
  let sum = 0;
  let max = 0;

  //loop k time to get sum value
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  //Init max from sum
  max = sum;
  //loop through arr and apply sliding window
  for (let i = k; i < arr.length; i++) {
    sum -= arr[i - k];
    sum += arr[i];
    // sum = sum - arr[i]+ arr[i+k]

    if (sum > max) max = sum;
  }
  return max;
}
//169. Majority Element
//Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times.
//You may assume that the majority element always exists in the array.
var majorityElement = function (nums) {
  let obj = {};
  let max = 0;
  let mj = 0;
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] == undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value > max) {
      max = value;
      mj = key;
    }
  }

  return mj;
};
//136. Single Number
//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

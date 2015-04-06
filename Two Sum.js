// Given an array of integers, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

// You may assume that each input would have exactly one solution.

// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(numbers, target) {
    var map = {};
    for(var i=0; i < numbers.length; i++) {
        if(map[numbers[i]] === undefined)
            map[target-numbers[i]] = i + 1;
        else
            return [map[numbers[i]], i + 1];
    }
};

// {2, 7, 9, 6, 11}  8
// map[6] = 1
// map[4] = 2
// ...
// map[6] is in map, return

// ### when using  
// for(var i in numbers)  
// i as a key, it is a string

// using for in with array iteration is not a good idea
// http://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-such-a-bad-idea

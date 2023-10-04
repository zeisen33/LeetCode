
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?




// O(n^2)
// const twoSum = (nums, target) => {
//     let i = 0

//     while (i < nums.length - 1) {
//         let j = 1

//         while (j < nums.length) {
//             if (nums[i] + nums[j] === target && i !==j) {
//                 return [i, j]
//             }
//             j++
//         }

//         i++
//     }
// }


// O(n)
// Hash stores numbers and indexes
const twoSum = (nums, target) => {
    let numsIdcs = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        // console.log(`diff: ${diff}`)
        // console.log(`i: ${i}, numsIdcs[diff]: ${numsIdcs[diff]}`)        
    
        // if (numsIdcs[diff]) {          <--- doesn't work because numsIdcs[diff] will always be undefined or 0 which are both falsey
        if (diff in numsIdcs) {
            // console.log('hits')
            return [numsIdcs[target - nums[i]], i]
        }
        else {
            numsIdcs[nums[i]] = i
        }
    }

    // console.log(numsIdcs)
    // console.log(numsIdcs['7'])
}

let nums = [3,2,4]
let target = 6


console.log(twoSum(nums, target))
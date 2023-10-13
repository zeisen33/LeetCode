// };You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


var addTwoNumbers = function(l1, l2) {
    let i = 0
    let sum = 0
    let j = 0
    let iLen = l1.length
    let jLen = l2.length
    // console.log(iLen)
    // console.log(jLen)

    //345
    while (i < iLen) {
        sum += l1[i] * 10**(iLen - i - 1)
        i++
    }

    while (j < jLen) {
        sum += l2[j] * 10**(jLen - j - 1)
        j++
    }

    // Go from having sum to list
    // Could do with sum.toString().split('') but I want to practice this way
    let curr = sum
    let finalAns = []

    // console.log(curr)
    while (curr > 9) {
        // console.log(`curr: ${curr}`)
        // console.log(`currAns: ${finalAns}`)
        // console.log(curr % 10)
        finalAns.push(curr % 10)
        // console.log(finalAns)
        curr = Math.floor(curr / 10)
        // console.log(curr)
    }

    // return finalAns.push(curr)  <---- Doesn't work because .push returns length of new array
    
    finalAns.push(curr)
    return finalAns
}


let l1 = [2,4,3]
let l2 = [5,6,4]

console.log(addTwoNumbers(l1, l2))
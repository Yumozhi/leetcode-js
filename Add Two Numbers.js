// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2){
    var carry = 0, val = 0;
    var temp = new ListNode(0), result = temp;
    while((l1 || l2 || carry)) {
        var n1 = 0, n2 = 0;
        if(l1) {
            n1 = l1.val;
            l1 = l1.next;
        }
        if(l2) {
            n2 = l2.val;
            l2 = l2.next;
        }
        sum = n1 + n2 + carry;
        val = sum % 10;
        carry = Math.floor(sum / 10);
        temp.next = new ListNode(val);
        temp = temp.next;
    }
    return result.next;
};


// http://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language

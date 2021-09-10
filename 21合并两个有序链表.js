// solution 1: time 84.09%, memory 38.7%
// 迭代
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    var prehead = new ListNode(-1)
    var pre = prehead
    while (l1 && l2){
        if (l1.val <= l2.val){
            pre.next = l1
            l1 = l1.next
        }else{
            pre.next = l2
            l2 = l2.next
        }
        pre = pre.next
    }
    pre.next = l1?l1:l2
    return prehead.next
};

// solution 2: time 71.05%, memory 43.67%
// 递归
// 1. 递归函数必须要有终止条件，否则会出错；
// 2. 递归函数先不断调用自身，直到遇到终止条件后进行回溯，最终返回答案。

// 给出一个递归算法，其时间复杂度 O(T) 通常是递归调用的数量（记作R） 和计算的时间复杂度的乘积（表示为O(s)）的乘积：O(T)=R∗O(s)
// m，n 为l1和l2的元素个数。递归函数每次去掉一个元素，直到两个链表都为空，因此需要调用R=O(m+n) 次。而在递归函数中我们只进行了 next 指针的赋值操作，复杂度为 O(1)，故递归的总时间复杂度为O(T)=R∗O(1)=O(m+n) 。

var mergeTwoLists = function(l1, l2) {
    if(!l1)
        return l2
    if(!l2)
        return l1
    if(l1.val>l2.val){
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }else{
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
};
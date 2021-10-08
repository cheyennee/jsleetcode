// solution 1:time 83.38, memory 79
// 快慢指针，错的人即使走了对方的路也还是会错过，对的人即使晚点相遇最终也还是相遇了
//每步操作需要同时更新指针pA 和 pB。
//如果指针pA 不为空，则将指针pA 移到下一个节点；如果指针pB 不为空，则将指针pB 移到下一个节点。
//如果指针pA 为空，则将指针pA 移到链表headB 的头节点；如果指针pB 为空，则将指针pB 移到链表headA 的头节点。
//当指针pA 和pB 指向同一个节点或者都为空时，返回它们指向的节点或者null。

var getIntersectionNode = function(headA, headB) {
    if(!headA||!headB)
        return null
    var pa = headA
    var pb = headB
    while(pa!==pb){
        pa=pa===null?headB:pa.next
        pb=pb===null?headA:pb.next
    }
    return pa
};

// solution 2: time 51.9, memory 26.35
// hashset

var getIntersectionNode = function(headA, headB) {
    const visited = new Set()
    let temp = headA
    while(temp){
        visited.add(temp)
        temp=temp.next
    }
    temp=headB
    while(temp){
        if(visited.has(temp))
            return temp
        temp=temp.next
    }
    return null
};
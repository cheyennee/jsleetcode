// solution 1: 
// 迭代
// 没跑通，主要是将头节点push进数组出现了问题

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if(!p&&!q)
        return true
    if(!p||!q)
        return false
    var stkp = []
    var stkq = []
    // push进去有问题
    stkp.push(p)
    stkq.push(q)
    console.log(stkp)[[1,2,3]]
    while(stkp.length>0&&stkq.length>0){
        let node1 = stkp[0].shift
        let node2 = stkq[0].shift
        if(node1.val!==node2.val)
            return false
        let left1=node1.left,right1=node1.right,left2=node2.left,right2=node2.right
        if(!left1&&left2||left1&&left2||left1.val!==left2.val)
            return false
        if(!right1&&right2||right1&&right2||right1.val!==right2.val)
            return false
        if(left1)
            stkp.push(left1)
        if(right1)
            stkp.push(right1)
        if(left2)
            stkq.push(left2)
        if(right2)
            stkq.push(right2)
    }
    if(stkp.length>0||stkq.length>0)
        return false
    return true
};

// solution 2: time 99.93%, memory 83.15%
// 递归

 var isSameTree = function(p, q) {
    if(!p&&!q)
        return true
    else if(!p||!q)
        return false
    else if(p.val!==q.val)
        return false
    else
        return isSameTree(p.left, q.left)&&isSameTree(p.right, q.right)
};
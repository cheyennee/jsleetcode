// solution 1: time 50.19%, memory 33.04%
// 容易错的地方：1. 路径和没有说一定是正的，所以不能提前结束

var hasPathSum = function(root, targetSum) {
    if(!root)
        return false
    if(targetSum===root.val&&!root.left&&!root.right)
        return true
    return hasPathSum(root.left, targetSum-root.val)||hasPathSum(root.right, targetSum-root.val)
};

// solution 2: time 81.93%, memory 5.97%
// 使用两个队列，分别存储将要遍历的节点，以及根节点到这些节点的路径和即可

var hasPathSum = function(root, targetSum) {
    if(!root)
        return false
    var stk = []
    var res = []
    stk.push(root)
    res.push(root.val)
    while(stk.length>0){
        let node = stk.shift()
        let val = res.shift()
        if(!node.left&&!node.right){
            if(val===targetSum)
                return true
            continue
        }
        if(node.left){
            stk.push(node.left)
            res.push(val+node.left.val)
        }
        if(node.right){
            stk.push(node.right)
            res.push(val+node.right.val)
        }
    }

    return false
};
// solution 1: time 21.64%, memory 59.69%
// 递归

var maxDepth = function(root) {
    if(!root)
        return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1
};

// solution 2: time 75.33%, memory 11.2%
// 迭代，层次遍历

var maxDepth = function(root) {
    if(!root)
        return 0
    var stk = []
    stk.push(root)
    var depth = 0
    while(stk.length>0){
        let size = stk.length
        while (size>0){
            let node = stk.shift()
            if(node.left)
                stk.push(node.left)
            if(node.right)
                stk.push(node.right)
            size--
        }
        depth++
    }
    return depth
};

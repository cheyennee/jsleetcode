// solution 1: time 64.25%, memory 49.38%
// 层次遍历

var minDepth = function(root) {
    // []这个测试用例卡了一次，注意细节
    if(!root)
        return 0
    var nums = 0
    var stk = []
    stk.push(root)
    while(stk.length>0){
        var len = stk.length
        nums++
        while(len){
            var node = stk.shift()
            if(node.left)
                stk.push(node.left)
            if(node.right)
                stk.push(node.right)
            if(!node.left&&!node.right)
                return nums
            len--
        }
    }
    return nums
};

// solution 2: time 18.31%, memory 82.18%
// 深度优先遍历

var minDepth = function(root) {
    if(!root)
        return 0
    if(!root.left)
        return minDepth(root.right)+1
    if(!root.right)
        return minDepth(root.left)+1
    return Math.min(minDepth(root.left), minDepth(root.right))+1
};
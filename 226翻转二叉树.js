// solution 1: time 57, memory 58
// 递归

var invertTree = function(root) {
    if(!root||!root.left&&!root.right)
        return root
    var temp = new TreeNode()
    temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
};

// solution 2: time 17, memory 62
// 迭代

var invertTree = function(root) {
    if(!root)
        return null;
    var queue = []
    queue.push(root)
    while(queue.length>0){
        var node = queue.shift()
        var temp = node.left
        node.left = node.right
        node.right = temp
        if(node.left)
            queue.push(node.left)
        if(node.right)
            queue.push(node.right)
    }
    return root
};

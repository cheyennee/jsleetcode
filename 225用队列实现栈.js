// solution 1: time 85, memory 30

var MyStack = function() {
    this.queue = []
    this._queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.queue.length>1){
        this._queue.push(this.queue.shift())
    }
    let ans = this.queue.shift()
    while(this._queue.length){
        this.queue.push(this._queue.shift())
    }
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    // slice以新的数组对象，返回数组中被选中的元素
    return this.queue.slice(-1)[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length
};

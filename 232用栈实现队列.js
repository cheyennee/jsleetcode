// solution 1: time 11, memory 8
// 这种方法沿用了用两个队列实现栈

var MyQueue = function() {
    this.stack = []
    this._stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack.length>1){
        this._stack.push(this.stack.pop())
    }
    var res = this.stack.pop()
    while(this._stack.length>0)
        this.stack.push(this._stack.pop())
    return res
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length>0?false:true
};





// solution 2: time 11, memory 5
// 这种方法将一个栈仍作为栈来使用

var MyQueue = function() {
    this.s1 = []
    this.s2 = []
    this.front = undefined
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(this.s1.length===0)
        this.front = x
    this.s1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.s2.length===0)
        while(this.s1.length>0)
            this.s2.push(this.s1.pop())
    return this.s2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.s2.length>0)
        return this.s2[this.s2.length-1]
    return this.front
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length===0&&this.s2.length===0
};

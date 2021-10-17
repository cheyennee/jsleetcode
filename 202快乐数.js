// 这题本质可以抽象成141环形链表

// solution 1: time 36, memory 80
// hash
// 1. 如果它是快乐数，那么它最终会到1
// 2. 如果它不是快乐数，那么它最终会在几个数字之间循环

var getNext = function(n){
    var sum=0
    while(n){
        let d = n%10
        n=~~(n/10)
        sum+=d*d
    }
    return sum;
}
var isHappy = function(n) {
    var seen = []
    while(n!=1&&seen.indexOf(n)===-1){
        seen.push(n)
        n=getNext(n)
    }
    return n===1
};

// solution 2: time 94, memory 99
// 快慢指针

var getNext = function(n){
    var sum=0
    while(n){
        let d = n%10
        n=~~(n/10)
        sum+=d*d
    }
    return sum;
}
var isHappy = function(n) {
    var slowRunner = n
    var fastRunner = getNext(n)
    while(fastRunner!==1&&slowRunner!==fastRunner){
        slowRunner=getNext(slowRunner)
        fastRunner=getNext(getNext(fastRunner))
    }
    return fastRunner===1
};
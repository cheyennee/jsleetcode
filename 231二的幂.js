// solution 1: time 88, memory 72

var isPowerOfTwo = function(n) {
    var i=0
    while(true){
        let res = Math.pow(2, i)
        if(res===n)
            return true
        else if(res<n)
            i++
        else
            return false
    }
};


// solution 2: 位运算，但是看不懂orz
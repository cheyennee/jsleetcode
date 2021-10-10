// solution 1: time 59, memory 37
// 转26进制

var titleToNumber = function(columnTitle) {
    var res = 0
    var startChar = "A".charCodeAt(0)
    for(var i=0;i<columnTitle.length;i++){
        let temp=columnTitle.charCodeAt(i)-startChar
        res=res*26+temp+1
    }
    return res
};
// solution 1: time 96, memory 88
// 这道题的本质是十进制转二十六进制，但是与普通转换不同的是它少了0
// 假设 A == 0，B == 1，那么 AB = 26 * 0 + 1 * 1
// 而现在 AB = 26 * (0 + 1) + 1 * (1 + 1)，
// 所以只要在处理每一位的时候减 1，就可以按照正常的 26 进制来处理

var convertToTitle = function(columnNumber) {
    var res = []
    var startChar = "A".charCodeAt(0)
    while(columnNumber){
        columnNumber--;
        let temp = columnNumber%26
        res.push(String.fromCharCode(startChar+temp))
        columnNumber=~~(columnNumber/26)
    }  
    return res.reverse().join("")
};
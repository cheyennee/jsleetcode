// solution 1: time 50.03%， memory 5.05%
// 效率低下

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    var len1 = a.length
    var len2 = b.length
    const res = []
    var index = 0
    var c=0
    for(var i=len1-1, j=len2-1;i>=0&&j>=0;i--,j--){
        if(a[i]*1+b[j]*1+c===2){
            res[index++]=0
            c=1
        }else if(a[i]*1+b[j]*1+c===3){
            res[index++]=1
            c=1
        }else{
            res[index++]=a[i]*1+b[j]*1+c
            c=0
        }
    }
    if(len1>len2){
        for(var j=len1-len2-1;j>=0;j--){
            if(a[j]*1+c>1){
                res[index++]=0
                c=1
            }else{
                res[index++]=a[j]*1+c
                c=0
            }
        }
    }else if(len1<len2){
        for(var j=len2-len1-1;j>=0;j--){
            if(b[j]*1+c>1){
                res[index++]=0
                c=1
            }else{
                res[index++]=b[j]*1+c
                c=0
            }
        }
    }
    if(c===1)
        res[index]=1
    return res.reverse().join('')
};

// solution 2:将二进制转换为十进制，计算结果后再转回二进制
// 但是此方法不适合长度较大的字符串进行计算

// solution 3：time 78.99%, memory 35.79%
// 同解法一：逐位相加，但是这种解法代码写得更优雅,虽然反转字符串很耗时

 var addBinary = function(a, b) {
    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")
    var carry = 0
    var len1 = a.length
    var len2 = b.length
    var n = len1 > len2?len1:len2
    var res = []
    var index = 0
    for(var i=0;i<n;i++){
        carry += i<len1?(a[i]==='1'):0
        carry += i<len2?(b[i]==='1'):0
        res[index++] = carry%2
        carry = ~~(carry/2)
    }
    if(carry)
        res[index]=1
    return res.reverse().join("")
};

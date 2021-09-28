// solution 1: time 25.44%, memory 76.44%
// 节省空间，只用两个数组

var getRow = function(rowIndex) {
    var preRow = []
    var res = []
    for(let i=0;i<=rowIndex;i++){
        res = new Array(i+1).fill(1)
        for(let j=1;j<i;j++)
            res[j]=preRow[j-1]+preRow[j]
        preRow=res
    }
    return res
};

// solution 2: time 96.38%, memory 30.11%
// 使用数学的方法

var getRow = function(rowIndex) {
    const row = new Array(rowIndex+1).fill(1)
    for(let i=1;i<=rowIndex;i++)
        row[i] = row[i-1]*(rowIndex-i+1)/i
    return row
};
// solution 1: time 23.47%, memory 9.2%

var generate = function(numRows) {
    if(numRows===1)
        return [[1]]
    else if(numRows===2)
        return [[1], [1, 1]]
    var res = [[1], [1, 1]]
    for(var i=2;i<numRows;i++){
        var temp = []
        for(var j=0;j<=i;j++){
            if(j===0||j===i)
                temp.push(1)
            else{
                temp.push(res[i-1][j-1]+res[i-1][j])
            }
        }
        res.push(temp)
    }
    return res
};

var generate = function(numRows){
    var res = []
    for(let i=0;i<numRows;i++){
        const row = new Array(i+1).fill(1)
        for(let j=1;j<row.length-1;j++)
            row[j]=res[i-1][j-1]+res[i-1][j]
        res.push(row)
    }
    return res
}
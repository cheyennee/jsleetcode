// 本题重点在于datediff函数的使用，并且大的时间应该写在小的时间前
// 时间比较不能直接使用b.recordDate-a.recordDate=1

select b.id
from Weather a ,Weather b
where DATEDIFF(b.recordDate,a.recordDate)=1 
and a.Temperature<b.Temperature
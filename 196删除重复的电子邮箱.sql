// 先将表自连接，然后找到表中左边id比右边id大的记录，最后删除

delete p1
from Person p1, Person p2
where p1.Email=p2.Email and p1.Id>p2.Id
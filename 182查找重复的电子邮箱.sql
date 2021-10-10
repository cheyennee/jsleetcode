// solution 1

select Email from
( select Email, count(Email) as num from Person group by Email) as statistic
where num>1

// solution 2
// 优先顺序：where>group by>having>order by

select Email
from Person
group by Email
having count(Email)>1

// solution 3

select distinct p1.Email
from Person as p1, Person as p2
where p1.Email=p2.Email and p1.Id!=p2.Id
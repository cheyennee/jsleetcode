# 考察外连接
# 如果没有某个人的地址信息，使用 where 子句过滤记录将失败，因为它不会显示姓名信息

# Write your MySQL query statement below
select FirstName, LastName, City, State from Person left outer join Address on Person.PersonId=Address.PersonId
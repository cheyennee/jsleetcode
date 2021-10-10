// 此题需要注意修改返回的表头

// solution 1: 此解法会导致产生笛卡尔乘积，最终查询的结果为4*4=16

select a.Name as Employee from Employee as a, Employee as b where a.ManagerId=b.Id and a.Salary > b.Salary

// solution 2: 使用Join连接避免产生笛卡尔乘积

select a.name as Employee from Employee as a join Employee as b on a.ManagerId=b.Id and a.Salary>b.Salary

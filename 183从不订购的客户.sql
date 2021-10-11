// solution 1: not in

select customers.name as 'Customers'
from customers
where customers.id not in
(
    select customerid from orders
);

// solution 2: join

select Customers.Name as Customers
from Customers left join Orders
on Customers.Id = Orders.CustomerId 
where Orders.Id is null
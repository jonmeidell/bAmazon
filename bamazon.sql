create database bamazon;

use bamazon;

create table products (
item_id int not null auto_increment primary key,
product_name varchar(100),
department_name varchar(45),
price decimal(65, 2),
stock_quantity int(10)
);

insert into products (product_name, department_name, price, stock_quantity)
values ("ream of paper", "office supplies", 5.99, 10);
insert into products (product_name, department_name, price, stock_quantity)
values ("package of pens", "office supplies", 3.99, 25);
insert into products (product_name, department_name, price, stock_quantity)
values ("coffee cup", "kitchen", 5.99, 50);
insert into products (product_name, department_name, price, stock_quantity)
values ("blender", "kitchen", 94.99, 70);
insert into products (product_name, department_name, price, stock_quantity)
values ("t-shirt", "clothing", 14.95, 25);
insert into products (product_name, department_name, price, stock_quantity)
values ("socks", "clothing", 3.99, 50);
insert into products (product_name, department_name, price, stock_quantity)
values ("grey slacks", "clothing", 24.99, 10);
insert into products (product_name, department_name, price, stock_quantity)
values ("blue slacks", "clothing", 24.99, 12);
insert into products (product_name, department_name, price, stock_quantity)
values ("stuffed animal", "toys", 13.99, 8);
insert into products (product_name, department_name, price, stock_quantity)
values ("blocks", "toys", 8.49, 11);
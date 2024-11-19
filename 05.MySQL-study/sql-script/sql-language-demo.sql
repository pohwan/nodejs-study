-- 01: Select all columns from users
-- select * from users

-- 02: Select column that want to view
-- select username, password from users

-- 03: Insert data
-- insert into users(username, password) values("tony shtark", "098123");
-- select * from users

-- 04: Update ID 4 user password 
-- update users set password="888888" where id=4;
-- select * from users

-- 04-1: Update 2 columns data
-- E.g: update users set password='admin123', status=1 where id=2
-- select * from users

-- 05: Delete data
-- delete from users where id=4
-- select * from users

-- 06: Ways to use WHERE 
-- select * from users where status=1
-- select * from users where id >= 2

-- 06-1: <> & != is the same operator
-- select * from users where username!='ls'

-- 07: Use AND and OR to query data
-- 07-1: AND
-- select * from users where status=0 and id<3

-- 07-2: OR
-- select * from users where status=1 or username='zs'

-- 08: Use ORDER BY to sort data (default is ascending order)
-- select * from users order by status

-- 08-1: ASC refers to ascending
-- select * from users order by status asc

-- 08-2: DESC refers to decending
-- select * from users order by id desc

-- 08-3: Multiple sorting. E.g. Status in decending order. Username in ascending order.
-- select * from users order by status desc, username asc

-- 09: Use count(*). E.g. Count total data from user table where status = 0
-- select count(*) from users where status=0

-- 10: Use AS to name displayed column name.
-- select count(*) as Total from users where status=0
-- select username as uname, password as upwd from users
-- create a new database for perntodo app
CREATE DATABASE perntodo;

-- create a new table for tasks,
-- inside the perntodo db
CREATE TABLE todos (
    _id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);

-- select everything from todos table
SELECT * FROM todos;

-- select one item from table
-- based on id
SELECT * FROM todos WHERE _id = 2;

-- update one todo item based on id
UPDATE todos
SET description = "Updated task description"
WHERE _id = 2;

-- delete todo based on id
DELETE FROM todos WHERE _id = 2;
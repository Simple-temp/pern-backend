CREATE DATABASE blogdb;

CREATE TABLE blog (

    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name TEXT ,
    des TEXT 

);



"INSERT INTO blog (name, des) VALUES ($1, $2) RETURNING *",[name, des]

SELECT * FROM blog;

SELECT * FROM blog WHERE id=jbkbihk

DELETE FROM blog WHERE id=jbkbihk

"UPDATE blog SET name=$1, des=$2 WHERE id=$3 RETURNING *",[name, des, id]
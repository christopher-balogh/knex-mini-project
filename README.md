# knex-mini-project
This project is a relational database containing three tables(Authors, Subjects, Books).

This diagram shows the relations of the tables.
![image](https://user-images.githubusercontent.com/96319959/157544712-b1fa6a8c-01a0-44c1-9327-9b97cc48e490.png)


### Dependencies:  
Express  
Postgres SQL  
Knex  
Morgan  
.env  

In order to use this as a developer you will need to create a .env file and set the "CONNECTION_STRING=" equal to the location of your database. Then you will want to set the connection key in the knex file to point to the connection string.  

#### For example: 
.env file should include:  
CONNECTION_STRING="postgres://USER_NAME:USER_PASSWORD@localhost/DATABASE_NAME"  

knex file should include:  
  development: {  
    client: 'postgresql',  
    connection: process.env.CONNECTION_STRING,  
  },  


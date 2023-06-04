CREATE DATABASE ProductCatalogue;


CREATE TABLE Category(
   Id int identity,
   Category_Name varchar(50)
   Constraint [Pk_Category] Primary key(Id)
);
  
CREATE TABLE Product(
   Product_Id uniqueidentifier primary key,
   Category_Id int,
   Product_Name varchar(50),
   Brand varchar(25),
   Price int,
   product_Desc varchar(max)
   Constraint [Fk_Product] Foreign key(Category_Id) references Category(Id) 
);


select * from Category;
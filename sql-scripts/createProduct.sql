USE productDB;
GO

CREATE PROCEDURE CreateProduct
    @Name NVARCHAR(100),
    @Price DECIMAL(10, 2)
AS
BEGIN
    INSERT INTO Products (Name, Price)
    VALUES (@Name, @Price);
END;
GO


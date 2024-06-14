USE productDB;
GO

CREATE PROCEDURE SearchProduct
    @Query NVARCHAR(100)
AS
BEGIN
    SELECT * FROM Products
    WHERE Name LIKE '%' + @Query + '%';
END;
GO

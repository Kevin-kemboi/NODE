USE productDB;
GO

CREATE PROCEDURE FilterProductsByPrice
    @MinPrice DECIMAL(10, 2),
    @MaxPrice DECIMAL(10, 2),
    @Name NVARCHAR(100) = ''
AS
BEGIN
    SELECT * FROM Products
    WHERE Price BETWEEN @MinPrice AND @MaxPrice
    AND (@Name = '' OR Name LIKE '%' + @Name + '%');
END;
GO

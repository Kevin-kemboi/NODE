USE productDB;
GO

CREATE PROCEDURE GetProductsPaginated
    @Start INT,
    @End INT
AS
BEGIN
    SELECT * FROM Products
    ORDER BY Id
    OFFSET @Start ROWS
    FETCH NEXT (@End - @Start + 1) ROWS ONLY;
END;
GO

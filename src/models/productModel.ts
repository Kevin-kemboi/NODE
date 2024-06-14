import pool from '../db/database';

export const createProduct = async (name: string, price: number) => {
    const request = pool.request();
    const result = await request
        .input('Name', name)
        .input('Price', price)
        .execute('CreateProduct');
    return result;
};

export const searchProduct = async (query: string) => {
    const request = pool.request();
    const result = await request
        .input('Query', query)
        .execute('SearchProduct');
    return result;
};

export const getProductsPaginated = async (start: number, end: number) => {
    const request = pool.request();
    const result = await request
        .input('Start', start)
        .input('End', end)
        .execute('GetProductsPaginated');
    return result;
};

export const filterProductsByPrice = async (minPrice: number, maxPrice: number, name?: string) => {
    const request = pool.request();
    const result = await request
        .input('MinPrice', minPrice)
        .input('MaxPrice', maxPrice)
        .input('Name', name || '')
        .execute('FilterProductsByPrice');
    return result;
};

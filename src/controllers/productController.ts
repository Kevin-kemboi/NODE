import { Request, Response } from 'express';
import { createProduct, searchProduct, getProductsPaginated, filterProductsByPrice } from '../models/productModel';

export const createProductHandler = async (req: Request, res: Response) => {
    const { name, price } = req.body;
    try {
        const result = await createProduct(name, price);
        res.status(201).json(result);
    } catch (error: unknown) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const searchProductHandler = async (req: Request, res: Response) => {
    const { query } = req.query;
    try {
        const result = await searchProduct(query as string);
        res.status(200).json(result);
    } catch (error: unknown) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getProductsPaginatedHandler = async (req: Request, res: Response) => {
    const { start, end } = req.query;
    try {
        const result = await getProductsPaginated(Number(start), Number(end));
        res.status(200).json(result);
    } catch (error: unknown) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const filterProductsByPriceHandler = async (req: Request, res: Response) => {
    const { minPrice, maxPrice, name } = req.query;
    try {
        const result = await filterProductsByPrice(Number(minPrice), Number(maxPrice), name as string);
        res.status(200).json(result);
    } catch (error: unknown) {
        res.status(500).json({ error: (error as Error).message });
    }
};

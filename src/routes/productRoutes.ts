import { Router } from 'express';
import { createProductHandler, searchProductHandler, getProductsPaginatedHandler, filterProductsByPriceHandler } from '../controllers/productController';

const router = Router();

router.post('/products', createProductHandler);
router.get('/products/search', searchProductHandler);
router.get('/products/paginated', getProductsPaginatedHandler);
router.get('/products/filter', filterProductsByPriceHandler);

export default router;

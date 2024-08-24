import express from 'express';
import { createProd } from '../controllers/product.js';
import { getAllProducts } from '../controllers/product.js';
import { updateProduct } from '../controllers/product.js';
import { deleteProduct  } from '../controllers/product.js';

const router = express.Router();
router.post('/add' , createProd);
router.get('/allProducts' , getAllProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct)
export default router;

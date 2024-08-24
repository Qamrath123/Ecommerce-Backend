import express from 'express';
import { createProd } from '../controllers/product.js';

const router = express.Router();
router.post('/add' , createProd);
export default router;

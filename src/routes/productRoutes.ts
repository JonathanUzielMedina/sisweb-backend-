import { Router, Request, Response } from 'express';
import { createProduct,
         deleteProduct,
         getAllProducts,
         getProductById,
         modifyProduct } from "../controller/productController"

const productRouter:Router = Router();

productRouter.get('/', getAllProducts);

productRouter.get('/:id', getProductById);

productRouter.post('/', createProduct);

productRouter.patch('/:id', modifyProduct);

productRouter.delete('/', deleteProduct);

export default productRouter;
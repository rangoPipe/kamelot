import { Router } from "express";
import { productController } from "../controller/ProductController";

const router:Router = Router();

router.get('/product', productController.index);
router.get('/product/product', productController.product);
router.post('/product/save', productController.saveProduct);

export default router;
import { Router } from "express";
import { productController } from "../controller/ProductController";

const router:Router = Router();

router.get('/product', productController.allProducts);
router.get('/product/product', productController.product);
router.post('/product/save', productController.save);

export default router;
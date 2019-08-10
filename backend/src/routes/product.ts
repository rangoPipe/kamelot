import { Router } from "express";
import { productController } from "../controller/ProductController";

const router:Router = Router();

router.get('/product', productController.allProducts);
router.post('/product/save', productController.save);
router.post('/product/find', productController.getOne);

export default router;
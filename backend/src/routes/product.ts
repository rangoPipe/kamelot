import { Router } from "express";
import { productController } from "../controller/core/productController";

const router:Router = Router();

router.get('/product', productController.allProducts);
router.get('/product/find', productController.getOne);
router.post('/product/save', productController.save);
router.post('/product/disable', productController.save);

export default router;
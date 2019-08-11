import { Router } from "express";
import { productController } from "../controller/core/productController";

const router:Router = Router();

router.get('/producto', productController.allProducts);
router.get('/producto/find', productController.getOne);
router.post('/producto/save', productController.save);
router.post('/producto/disable', productController.save);

export default router;
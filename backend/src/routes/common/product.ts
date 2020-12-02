import { Router} from "express";
import { productController } from "../../controller/common/productController";

const router:Router = Router();

router.get('/producto', productController.allProductsActive);
router.get('/producto/find/:id', productController.getOne);
router.post('/producto/save', productController.save);
router.post('/producto/disable', productController.disable);

export default router;
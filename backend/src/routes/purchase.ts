import { Router } from "express";
import { purchaseController } from "../controller/purchaseController";

const router:Router = Router();

router.get('/compra', purchaseController.allProductsActive);
router.get('/compra/find:id', purchaseController.getOne);
router.post('/compra/save', purchaseController.save);
router.post('/compra/disable', purchaseController.disable);

export default router;
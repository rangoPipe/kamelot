import { Router } from "express";
import { purchaseController } from "../controller/purchaseController";

const router:Router = Router();

router.get('/compra', purchaseController.allPurchases);
router.get('/compra/find', purchaseController.getOne);
router.post('/compra/save', purchaseController.save);
router.post('/compra/disable', purchaseController.save);

export default router;
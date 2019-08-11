import { Router } from "express";
import { providerController } from "../controller/core/providerController";

const router:Router = Router();

router.get('/provider', providerController.allProviders);
router.get('/provider/find', providerController.getOne);
router.post('/provider/save', providerController.save);
router.post('/provider/disable', providerController.save);

export default router;
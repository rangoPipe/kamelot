import { Router } from "express";
import { providerController } from "../controller/core/providerController";

const router:Router = Router();

router.get('/proveedor', providerController.allProviders);
router.get('/proveedor/find', providerController.getOne);
router.post('/proveedor/save', providerController.save);
router.post('/proveedor/disable', providerController.save);

export default router;
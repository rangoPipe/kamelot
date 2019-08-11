import { Router } from "express";
import { parameterController } from "../controller/core/parameterController";

const router:Router = Router();

router.get('/parametro', parameterController.allParameters);
router.get('/parametro/find', parameterController.getOne);
router.post('/parametro/save', parameterController.save);
router.post('/parametro/disable', parameterController.save);

export default router;
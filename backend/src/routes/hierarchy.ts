import { Router } from "express";
import { hierarchyController } from "../controller/core/hierarchyController";

const router:Router = Router();

router.get('/jerarquia', hierarchyController.allHieararchies);
router.get('/jerarquia/find', hierarchyController.getOne);
router.post('/jerarquia/save', hierarchyController.save);
router.post('/jerarquia/disable', hierarchyController.save);

export default router;
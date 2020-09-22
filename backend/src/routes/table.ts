import { Router } from "express";
import { tableController } from "../controller/core/tableController";

const router:Router = Router();

router.get('/mesa', tableController.allPersonsActive);
router.get('/mesa/find', tableController.getOne);
router.post('/mesa/save', tableController.save);
router.post('/mesa/disable', tableController.disable);

export default router;
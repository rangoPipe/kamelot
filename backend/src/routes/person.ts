import { Router } from "express";
import { personController } from "../controller/core/personController";

const router:Router = Router();

router.get('/persona', personController.allPersons);
router.get('/persona/find/:id', personController.getOne);
router.post('/persona/save', personController.save);
router.post('/persona/disable', personController.save);

export default router;
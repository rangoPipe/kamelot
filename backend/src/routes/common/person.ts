import { Router } from "express";
import { personController } from "../../controller/common/personController";

const router:Router = Router();

router.get('/AllPersona', personController.allPersons);
router.get('/persona', personController.allPersonsActive);
router.get('/persona/find/:id', personController.getOne);
router.post('/persona/save', personController.save);
router.post('/persona/disable', personController.disable);

export default router;
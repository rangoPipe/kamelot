import { Router } from "express";
import { empleoyeeController } from "../controller/core/empleoyeeController";

const router:Router = Router();

router.get('/empleado', empleoyeeController.allEmpleoyees);
router.get('/empleado/find/:id', empleoyeeController.getOne);
router.post('/empleado/save', empleoyeeController.save);
router.post('/empleado/disable', empleoyeeController.save);

export default router;
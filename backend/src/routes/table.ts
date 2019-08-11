import { Router } from "express";
import { tableController } from "../controller/core/tableController";

const router:Router = Router();

router.get('/table', tableController.allTables);
router.get('/table/find', tableController.getOne);
router.post('/table/save', tableController.save);
router.post('/table/disable', tableController.save);

export default router;
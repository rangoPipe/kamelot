import { Router, Request, Response} from "express";
import { indexController } from "../controller/indexController";

const router:Router = Router();


router.get('/', indexController.index);

export default router;
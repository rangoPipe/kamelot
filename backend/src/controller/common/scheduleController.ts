import { Request, Response } from "express";
import BaseException from "../../lib/baseException";
import AppResponse from "../../lib/appResponse";
import scheduleModel,{ Schedule } from "../../model/common/schedule";

class ScheduleController {

    public async allSchedules(req: Request, res: Response) {

    }

    public async save(req: Request, res:Response):Promise<void> {

    }

    public async getOne(req: Request, res: Response) {

    }

    public async disable(req: Request, res: Response) {
        
    }
}

export const scheduleController = new ScheduleController();
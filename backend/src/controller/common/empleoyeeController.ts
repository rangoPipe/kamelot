import { Request, Response } from "express";
import BaseException from "../../lib/baseException";
import AppResponse from "../../lib/appResponse";
import empleoyeeModel, { Employee } from "../../model/common/employee";

class EmpleoyeeController {

    public async allEmpleoyees(req: Request, res: Response) {

    }

    public async save(req: Request, res:Response):Promise<void> {

    }

    public async getOne(req: Request, res: Response) {
        
    }

    public async disable(req: Request, res: Response) {
        
    }
}

export const empleoyeeController = new EmpleoyeeController();
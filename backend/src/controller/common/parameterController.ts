import { Request, Response } from "express";
import BaseException from "../../lib/baseException";
import AppResponse from "../../lib/appResponse";
import parameterModel, { Parameter } from "../../model/common/parameter";

class ParameterController {

    public async allParameters(req: Request, res: Response) {
        
    }

    public async save(req: Request, res:Response):Promise<void> {
        
    }

    public async getOne(req: Request, res: Response) {
        
    }

    public async disable(req: Request, res: Response) {
        
    }
}

export const parameterController = new ParameterController();
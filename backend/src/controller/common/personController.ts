import { Request, Response } from "express";
import BaseException from "../../lib/baseException";
import AppResponse from "../../lib/appResponse";
import personModel, { Person } from "../../model/common/person";

class PersonController {

    public async allPersons(req: Request, res: Response) {
           
    }

    public async allPersonsActive(req: Request, res: Response) {

    }

    public async save(req: Request, res:Response):Promise<void> {
        
    }

    public async getOne(req: Request, res: Response) {
        
    }

    public async disable(req: Request, res: Response) {
        
    }
}

export const personController = new PersonController();
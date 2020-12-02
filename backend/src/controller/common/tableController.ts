import { Request, Response } from "express";
import BaseException from "../../lib/baseException";
import AppResponse from "../../lib/appResponse";
import tableModel, { Table } from "../../model/common/table";

class TableController {

    public async allTables(req: Request, res: Response) {

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

export const tableController = new TableController();
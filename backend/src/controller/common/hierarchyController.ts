import { Request, Response } from "express";
import BaseException from "../../lib/baseException";
import AppResponse from "../../lib/appResponse";
import hierarchyModel, { Hierarchy } from "../../model/common/hierarchy";

class HierarchyController {

    public async allHieararchies(req: Request, res: Response) {

    }

    public async save(req: Request, res:Response):Promise<void> {

    }

    public async getOne(req: Request, res: Response) {

    }

    public async disable(req: Request, res: Response) {
        
    }
}

export const hierarchyController = new HierarchyController();
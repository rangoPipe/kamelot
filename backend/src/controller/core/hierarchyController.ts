import { Request, Response } from "express";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { hieararchyLogic } from "../../logic/core/hierarchyLogic";
import hierarchyModel, { Hierarchy } from "../../model/core/hierarchy";

class HierarchyController {

    public async allHieararchies(req: Request, res: Response) {
        try {
            const result = await hieararchyLogic.getAllHiearchies();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const provider:Hierarchy = hierarchyController.createModel(req);
            let response = await hieararchyLogic.save(provider);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = hierarchyController.createModel(req);
            const result = await hieararchyLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = hierarchyController.createModel(req.body);
            const result = await hieararchyLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Hierarchy {
        const { id, nombre } = (Object.keys(req.body).length > 0) ? req.body : req.params;

        const model:Hierarchy = new hierarchyModel({
            _id : id,
            name : nombre,
            dateCreate : new Date()
        });
        return model;
    }
}

export const hierarchyController = new HierarchyController();
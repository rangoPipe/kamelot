import { Request, Response } from "express";
import BaseException from "../../lib/baseException";
import AppResponse from "../../lib/appResponse";
import Model, { IPurchase, createModel } from "../../model/core/purchase";

class PurchaseController {

    public async allProductsActive(req: Request, res: Response) {
    }

    public async save(req: Request, res:Response):Promise<void> {
    }

    public async getOne(req: Request, res: Response) {
    }

    public async disable(req: Request, res: Response) {
    }
}

export const purchaseController = new PurchaseController();
import { Request, Response } from "express";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { personLogic } from "../../logic/core/personLogic";
import personModel, { Person } from "../../../../model/core/person";

class PersonController {

    public async allPersons(req: Request, res: Response) {
        try {
            const result = await personLogic.getAllPersons();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const model:Person = personController.createModel(req);
            let response = await personLogic.save(model);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = personController.createModel(req);
            const result = await personLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = personController.createModel(req.body);
            const result = await personLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Person {
        const { id, pNombre, sNombre, pApellido, sApellido, telefono, idType, numDoc, correo, fNacimiento } = (Object.keys(req.body).length > 0) ? req.body : req.params;

        const model:Person = new personModel({
            _id: id,
            typeDocument    : idType,
            number_document : numDoc,
            first_name      : pNombre,
            second_name     : sNombre,
            first_lastname  : pApellido,
            second_lastname : sApellido,
            telephone       : telefono,
            email           : correo,
            birthdate       : fNacimiento,
            dateCreate      : new Date()
        });
        return model;
    }
}

export const personController = new PersonController();
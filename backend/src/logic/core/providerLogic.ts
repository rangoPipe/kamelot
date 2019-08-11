import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { providerManager } from "../../manager/core/providerManager";
import { Provider } from "../../../../model/core/provider";

class ProviderLogic {

    public async getAllProviders():Promise<any> {
        try {
            return await providerManager.getAllProviders();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Provider):Promise<any>  {
        try {
            return await providerManager.getOne(model);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Provider):Promise<any> {

        try {
            return await providerManager.save(model);        
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Provider): Promise<any>  {
        try {
            return await providerManager.disable(model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const providerLogic = new ProviderLogic();
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import providerModel, { Provider } from "../../../../model/core/provider";

class ProviderManager {

    public async getAllProviders():Promise<any> {
        try {
            return await providerModel.find();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Provider):Promise<any>  {
        try {
            return await providerModel.findById(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(provider:Provider):Promise<any> {

        try {
            let result = await providerModel.findById(provider.id);         
            return (!result) ? await providerManager.saveProvider(provider) : await providerManager.updateProvider(provider);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveProvider(provider:Provider):Promise<any> {
        try {
            return await provider.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateProvider(provider:Provider): Promise<any> {
        try {
            provider.dateUpdate = new Date();
            return providerModel.findByIdAndUpdate(provider.id, provider);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Provider): Promise<any>  {
        try {
            return await providerModel.findByIdAndUpdate(model.id, { $set: { activo:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const providerManager = new ProviderManager();
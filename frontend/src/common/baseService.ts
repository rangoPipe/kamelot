import { constantes } from "./constants";
import AppResponse from './appResponse';
import BaseException from "./baseException";

export class BaseService {

    public HttpRequest(method:string, controller:string ): Promise<AppResponse> {
        try {
            const requestHeaders: Headers = new Headers();
            requestHeaders.append('Content-type', 'application/json');
            requestHeaders.append("Accept","application/json");

            const requestInit:RequestInit = { method, headers: requestHeaders};

            return fetch(`${constantes.urlApi}${controller}`, requestInit)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                return new AppResponse(true, result );
            });
        } catch (error) {
            new BaseException(500, error);
        }
    }
}
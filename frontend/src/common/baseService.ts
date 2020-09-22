import { constantes } from "./constants";
import AppResponse from './appResponse';
import BaseException from "./baseException";

export class BaseService {

    public HttpRequest(base:IBaseService ): Promise<AppResponse> {
        try {
            const requestHeaders: Headers = new Headers();
            requestHeaders.append('Content-type', 'application/json');
            requestHeaders.append("Accept","application/json");

            const requestInit:RequestInit = { method: base.method, headers: requestHeaders, body: JSON.stringify(base.body)};

            return fetch(`${constantes.urlApi}${base.controller}`, requestInit)
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

export interface IBaseService {
    method:string;
    controller:string;
    body?: any;
}
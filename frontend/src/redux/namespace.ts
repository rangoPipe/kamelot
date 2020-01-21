import { IButton } from "./reducer/general/button/IButton";

export interface StoreGeneral {
    /**
     * Almacena las propiedades nativas y genericas para el componente general de button
     */
    button:IButton;
}

export interface MainStore extends StoreGeneral {
    
}

export interface IAction {
    /**
     * Almacena el nombre de la accion
     */
    type:string;

    /**
     * Suministra el valor a tratar por el reducer
     */
    payload?:any;
}
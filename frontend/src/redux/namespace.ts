import { IButton } from "./reducer/general/button/IButton";
import { IInput } from "./reducer/general/input/IInput";
import { ISelect } from "./reducer/general/select/ISelect";
import { ITable } from "./reducer/general/table/ITable";
import { IMessage } from "./reducer/general/message/IMessage";
import { ICard } from "./reducer/general/card/ICard";
import { IDrawer } from "./reducer/general/drawer/IDrawer";

export interface StoreGeneral {
    /**
     * Almacena las propiedades nativas y genericas para el componente general de button
     */
    button:IButton;

    /**
     * Almacena las propiedades nativas y genericas para el componente general de input
     */
    input:IInput;

    /**
     * Almacena las propiedades nativas y genericas para el componente general de select
     */
    select:ISelect;

    /**
     * Almacena las propiedades nativas y genericas para el componente general de table
     */
    table:ITable;

    /**
     * Almacena las propiedades nativas y genericas para el componente general de message
     */
    message:IMessage;

    /**
     * Almacena las propiedades nativas y genericas para el componente general de card
     */
    card:ICard;

    /**
     * Almacena las propiedades nativas y genericas para el componente general de drawer
     */
    drawer:IDrawer;
}

export interface MainStore extends StoreGeneral {

    //Product
    tableProduct: ITable;
    drawerProduct: IDrawer;
    
}

export interface IAction {
    /**
     * Almacena el nombre de la accion
     */
    type:string;

    /**
     * Suministra el valor a tratar por el reducer
     */
    payload:any;
}
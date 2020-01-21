import { ButtonType } from "antd/lib/button";

export interface IButton {
    text?:string;
    disable?:boolean;
    onChange?:object;
    type?:ButtonType;
}
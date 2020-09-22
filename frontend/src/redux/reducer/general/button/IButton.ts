import { ButtonProps, ButtonType } from "antd/lib/button";

export interface IButton extends ButtonProps {
    text?:string;
    disable?:boolean;
    type?:ButtonType;
}
import { SelectProps } from "antd/lib/select";

export interface IOption {
    value:string;
    label:string;
}

export interface ISelect extends SelectProps {
    option?:IOption[];
}
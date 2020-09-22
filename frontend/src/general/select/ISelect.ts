import { ISelect } from "../../redux/reducer/general/select/ISelect";

export interface ISelectState extends ISelect {
    select:ISelect
}

export interface ISelectProps extends ISelectState {
}
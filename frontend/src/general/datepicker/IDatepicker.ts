import { IDatepicker } from "../../redux/reducer/general/datepicker/IDatepicker";

export interface IDatepickerState extends IDatepicker {
    datepicker:IDatepicker
}

export interface IDatepickerProps extends IDatepickerState {
}
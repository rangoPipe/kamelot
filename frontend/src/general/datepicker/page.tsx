import * as React from "react";
import { DatePicker } from 'antd';
import { IDatepickerProps } from "./IDatepicker";

export default function Page(props:IDatepickerProps) {
    const { datepicker } = props;
    return (
        <div>
            { 
                datepicker.label != null 
                ? <label>{ datepicker.label }</label>
                : null 
            }
            <DatePicker 
                style = { { width: "100%" } }
                value = { datepicker.value } 
                format = { datepicker.format }
                allowClear
                onChange = { datepicker.onChange }
                />
        </div>
        
        );
}
import * as React from "react";
import { Select } from 'antd';
import { ISelectProps } from "./ISelect";
import { IOption } from "../../redux/reducer/general/select/ISelect";

export default function Page(props:ISelectProps) {
    const { select } = props;    
    
    return (
        <div>
            { 
                select.label != null 
                ? <label>{ select.label }</label>
                : null 
            }
            <Select placeholder = { select.placeholder } style = { select.style } allowClear onChange = { select.onChange } defaultValue = { select.defaultValue } >
                    {
                        select.option?.map((x:IOption) => {
                            return (<Select.Option key = { x.value } value = { x.value }>{ x.label }</Select.Option> );
                        })
                    }
                </Select>
            
        </div>
        );
}
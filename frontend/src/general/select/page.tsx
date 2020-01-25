import * as React from "react";
import { Select } from 'antd';
import { ISelectProps } from "./ISelect";
import { IOption } from "../../redux/reducer/general/select/ISelect";

export default function Page(props:ISelectProps) {
    const { select } = props;    
    
    return (
        <Select placeholder = { select.placeholder } style = { select.style }>
            {
                select.option?.map((x:IOption) => {
                    return (<Select.Option value = { x.value  }>{ x.label }</Select.Option> );
                })
            }
        </Select>
        );
}
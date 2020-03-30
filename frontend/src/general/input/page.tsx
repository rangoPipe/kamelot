import * as React from "react";
import { Input } from 'antd';
import { IInputProps } from "./IInput";

export default function Page(props:IInputProps) {
    const { input } = props;
    return (
        <div>
            { 
                input.label != null 
                ? <label>{ input.label }</label>
                : null 
            }
            <Input 
                type = { input.type } 
                placeholder = { input.placeholder }
                value = { input.value } 
                onChange = { input.onChange }
                />
        </div>
        
        );
}
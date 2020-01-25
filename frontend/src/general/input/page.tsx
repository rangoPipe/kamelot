import * as React from "react";
import { Input } from 'antd';
import { IInputProps } from "./ICard";

export default function Page(props:IInputProps) {
    const { input } = props;
    return (
        <Input type = { input.type } placeholder = { input.placeholder } />
        );
}
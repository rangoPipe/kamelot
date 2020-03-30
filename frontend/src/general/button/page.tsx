import * as React from "react";
import { Button } from 'antd';
import { IButtonProps } from "./IButton";

export default function Page(props:IButtonProps) {
    const { button } = props;
    return (
        <Button type = { button.type } onClick = { button.onClick }> { button.text } </Button>
        );
}
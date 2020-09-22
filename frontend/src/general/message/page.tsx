import * as React from "react";
import { message } from 'antd';
import { IMessageProps } from "./IMessage";

export default function Page(props:IMessageProps) {
    return (
        message.success(props.message.text)
        );
}
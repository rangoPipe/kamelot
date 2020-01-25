import * as React from "react";
import { Card } from 'antd';
import { ICardProps } from "./ICard";

export default function Page(props:ICardProps) {
    const { card } = props;
    return (
        <Card size = { card.size }  title = { card.title } style = { card.style } extra = { card.extra } loading = { card.loading }>
            { card.body }
        </Card>
        );
}
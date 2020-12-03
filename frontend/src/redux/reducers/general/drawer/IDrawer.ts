import * as React from "react";

export interface IDrawerProps {
    title?: string;
    placement?: "top" | "right" | "bottom" | "left";
    closable?: boolean;
    onClose?: (e:React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
    visible?: boolean;
    width?: string | number;
    body?: any;
}
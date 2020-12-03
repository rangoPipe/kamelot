import * as React from "react";

export interface IDatePickerProps {
    id?: string;
    label?: string;
    className?: string;
    format?: string;
    hidden?: boolean;
    value?: object | string | number | Date | null | undefined;
    style?: React.CSSProperties;
    onChange?: (date: Date, value?: string)  => void;
}


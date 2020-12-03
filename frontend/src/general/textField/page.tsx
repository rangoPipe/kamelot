import * as React from "react";
import { ITextFieldProps } from "./ITextField";
import { TextField } from "@material-ui/core";

export default function Page(props: ITextFieldProps) {
    const { textField } = props;
    
    return (
        (textField.hidden)
        ? null
        : <TextField 
            id={textField.id} 
            label={textField.label} 
            className={textField.className} 
            placeholder={textField.placeholder} 
            onChange={textField.onChange} 
            value={textField.value}
            multiline = { textField.multiline }
            rows = { textField.rows }
            hidden= {textField.hidden}
            variant="outlined" 
            size = "medium"
            fullWidth
            margin="dense" />
    );
}
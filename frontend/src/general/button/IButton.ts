import { IButton } from "../../redux/reducer/general/button/IButton";

export interface IButtonState extends IButton {
    button:IButton
}

export interface IButtonProps extends IButtonState {
}
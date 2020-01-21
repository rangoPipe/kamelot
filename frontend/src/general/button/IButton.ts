import { IButton } from "../../redux/reducer/general/button/IButton";

export interface IButtonState extends IButton {

}

export interface IButtonProps extends IButtonState {
    button:IButton
}
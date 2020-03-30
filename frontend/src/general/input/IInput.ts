import { IInput } from "../../redux/reducer/general/input/IInput";

export interface IInputState extends IInput {
    input:IInput
}

export interface IInputProps extends IInputState {
}
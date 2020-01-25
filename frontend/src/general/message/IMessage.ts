import { IMessage } from "../../redux/reducer/general/message/IMessage";

export interface IMessageState extends IMessage {
    message:IMessage
}

export interface IMessageProps extends IMessageState {
}
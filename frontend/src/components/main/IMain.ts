import { collectionName } from "../../common/enum/collectionName";

export interface IMainState {
    content?:collectionName | null | undefined;
}

export interface IMainProps extends IMainState {
    onChange?:any;
}
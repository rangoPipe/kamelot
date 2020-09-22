import { collectioneName } from "../../common/enum/collectionName";

export interface IMainState {
    content?:collectioneName | null | undefined;
}

export interface IMainProps extends IMainState {
    onChange?:any;
}
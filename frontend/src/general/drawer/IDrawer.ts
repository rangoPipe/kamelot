import { IDrawerProps as IDrawer } from "../../redux/reducers/general/drawer/IDrawer";

export interface IDrawerState extends IDrawer {
    drawer:IDrawer
}

export interface IDrawerProps extends IDrawerState {
}
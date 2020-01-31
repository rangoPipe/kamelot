import { IDrawer } from "../../redux/reducer/general/drawer/IDrawer";

export interface IDrawerState extends IDrawer {
    drawer:IDrawer
}

export interface IDrawerProps extends IDrawerState {
}
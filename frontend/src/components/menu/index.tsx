import * as React from "react";
import { IMenuProps } from "./IMenu";
import { IMainState } from "../main/IMain";
import Page from "./page";

export default class MainMenu extends React.Component<IMenuProps, IMainState> {

    render(){
        return <Page onChange = { this.props.onChange }/>;
    }
}
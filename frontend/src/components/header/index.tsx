import * as React from "react";
import { IHeaderState, IHeaderProps } from "./IHeader";
import Page from "./page";

export default class MainHeader extends React.Component<IHeaderProps,IHeaderState>  {
    
    render(){
        return <Page />
    }
}
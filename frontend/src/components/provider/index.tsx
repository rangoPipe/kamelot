import * as React from "react";
import { connect } from "react-redux";
import { MainStore } from "../../redux/namespace";
import { IProviderState, IProviderProps } from "./IProvider";
import Page from "./page";

export class ProviderMain extends React.Component<IProviderProps, IProviderState> {
    
    render(){
        return <Page />
    }
}

const mapStateToProps = (state: MainStore) => {  
    return {
    };
  };
  
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderMain);
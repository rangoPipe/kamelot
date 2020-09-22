import * as React from "react";
import { connect } from "react-redux";
import { IDrawerProps, IDrawerState } from "./IDrawer";
import { MainStore } from "../../redux/namespace";
import Page from "./page";

export class DrawerClass extends React.Component<IDrawerProps, IDrawerState> {
  
    render():JSX.Element {      
      const { drawer } = this.props;
        return ( <Page drawer = { drawer } />);
    }
}

const mapStateToProps = (state: MainStore) => {  
    return {
      drawer: state.drawer
    };
  };
  
const mapDispatchToProps = {};
  
export default connect(mapStateToProps, mapDispatchToProps)(DrawerClass);
  
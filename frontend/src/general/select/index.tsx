import * as React from "react";
import { connect } from "react-redux";
import { ISelectProps, ISelectState } from "./ISelect";
import { MainStore } from "../../redux/namespace";
import Page from "./page";

export class SelectClass extends React.Component<ISelectProps, ISelectState> {
  
    render():JSX.Element {      
      const { select } = this.props;
        return ( <Page select = { select } />);
    }
}

const mapStateToProps = (state: MainStore) => {  
    return {
      select: state.select
    };
  };
  
const mapDispatchToProps = {};
  
export default connect(mapStateToProps, mapDispatchToProps)(SelectClass);
  
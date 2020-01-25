import * as React from "react";
import { connect } from "react-redux";
import { IInputProps, IInputState } from "./ICard";
import { MainStore } from "../../redux/namespace";
import Page from "./page";

export class InputClass extends React.Component<IInputProps, IInputState> {
  
    render():JSX.Element {      
      const { input } = this.props;
        return ( <Page input = { input } />);
    }
}

const mapStateToProps = (state: MainStore) => {  
    return {
      input: state.input
    };
  };
  
const mapDispatchToProps = {};
  
export default connect(mapStateToProps, mapDispatchToProps)(InputClass);
  
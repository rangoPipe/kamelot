import * as React from "react";
import { connect } from "react-redux";
import { IButtonProps, IButtonState } from "./IButton";
import { MainStore } from "../../redux/namespace";
import Page from "./page";

export class ButtonClass extends React.Component<IButtonProps, IButtonState> {
  
    render():JSX.Element {
      const { button } = this.props;
        return ( <Page button = { button } />);
    }
}

const mapStateToProps = (state: MainStore) => {  
    return {
      button: state.button
    };
  };
  
const mapDispatchToProps = {};
  
export default connect(mapStateToProps, mapDispatchToProps)(ButtonClass);
  
import * as React from "react";
import { connect } from "react-redux";
import { IMessageProps, IMessageState } from "./IMessage";
import { MainStore } from "../../redux/namespace";
import Page from "./page";

export class MessageClass extends React.Component<IMessageProps, IMessageState> {
  
    render():JSX.Element {      
      const { message } = this.props;
        return (<div></div>)
    }
}

const mapStateToProps = (state: MainStore) => {  
    return {
      message: state.message
    };
  };
  
const mapDispatchToProps = {};
  
export default connect(mapStateToProps, mapDispatchToProps)(MessageClass);
  
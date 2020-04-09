import * as React from "react";
import { connect } from "react-redux";
import { IDatepickerProps, IDatepickerState } from "./IDatepicker";
import { MainStore } from "../../redux/namespace";
import Page from "./page";

export class DatepickerClass extends React.Component<IDatepickerProps, IDatepickerState> {
  
    render():JSX.Element {      
      const { datepicker } = this.props;
        return ( <Page datepicker = { datepicker } />);
    }
}

const mapStateToProps = (state: MainStore) => {  
    return {
      datepicker: state.datepicker
    };
  };
  
const mapDispatchToProps = {};
  
export default connect(mapStateToProps, mapDispatchToProps)(DatepickerClass);
  
import * as React from "react";
import { connect } from "react-redux";
import { ITableProps, ITableState } from "./ITable";
import { IStore } from "../../redux/namespace";
import Page from "./page";

export class TableClass extends React.Component<ITableProps, ITableState> {
  
    render():JSX.Element {      
      const { table } = this.props;
        return ( <Page table = { table } />);
    }
}

const mapStateToProps = (state: IStore) => {  
    return {
      table: state.table
    };
  };
  
const mapDispatchToProps = {};
  
export default connect(mapStateToProps, mapDispatchToProps)(TableClass);
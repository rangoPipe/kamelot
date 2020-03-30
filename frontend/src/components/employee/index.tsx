import * as React from "react";
import { connect } from "react-redux";
import { IEmployeeProps, IEmployeeState } from "./IEmployee";

import { MainStore } from "../../redux/namespace";

import Page from "./page";
import DrawerPage from "./drawer/page";
import { showDrawer, createDrawer } from "../../redux/action/general/drawer/_actionName";
import { createTable } from "../../redux/action/general/table/_actionName";
import { ColumnProps } from "antd/lib/table";
import { subspace } from "redux-subspace";
import { EmployeeNamespace } from "../../common/enum/employee/enumEmployee";

import store from "../../redux/store";
import { createInput, changeValue } from "../../redux/action/general/input/_actionName";


export class EmpleoyeeClass extends React.Component<IEmployeeProps, IEmployeeState> {

  private _tableController = subspace( (state: MainStore) => state.tableEmployee, EmployeeNamespace.table )(store);
  private _drawerController = subspace( (state: MainStore) => state.drawerEmployee, EmployeeNamespace.drawer )(store);
  private _hierarchyController = subspace( (state: MainStore) => state.hierarchyInputEmployee, EmployeeNamespace.hierarchy )(store);
  private _salaryController = subspace( (state: MainStore) => state.salaryInputEmployee, EmployeeNamespace.salary )(store);

    constructor(props:IEmployeeProps) {
        super(props);

        this._tableController.dispatch({ type: createTable, payload: {
            columns: this._createColumns()
        }});

        this._drawerController.dispatch({ type: createDrawer, payload: {
          title: "Empleado",
          onClose: () => this._hideDrawer(),
          width: '700px',
          body: <DrawerPage onAccept = { this._HttpRequest } />
        }});

        this._hierarchyController.dispatch({ type: createInput, payload: {
            type: "text",
            placeholder: "Cargo",
            label: "Cargo",
            value: "",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._hierarchyController.dispatch({ type: changeValue, payload: e.target.value })
        }});

        this._salaryController.dispatch({ type: createInput, payload: {
            type: "text",
            placeholder: "Salario",
            label: "Salario",
            value: 0,
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._salaryController.dispatch({ type: changeValue, payload: e.target.value })
        }});
    }
    
    private _createColumns = ():ColumnProps<any>[] => {

        return [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Provider',
                dataIndex: 'provider',
                key: 'provider',
              },
              {
                title: 'Type Material',
                dataIndex: 'typeMaterial',
                key: 'typeMaterial',
              },
              {
                title: 'Código EAN',
                dataIndex: 'ean',
                key: 'ean',
              },
              {
                title: 'Date Create',
                dataIndex: 'dateCreate',
                key: 'dateCreate',
              },
        ];
    }

    private _showDrawer = () => {
      this._drawerController.dispatch({ type: showDrawer, payload: true});
    }

    private _hideDrawer = () => {
      this._drawerController.dispatch({ type: showDrawer, payload: false});
    }

    public _HttpRequest = () => {

      console.log(this._hierarchyController.getState().value);
      console.log(this._salaryController.getState().value);
      
      /*fetch('http://example.com/movies.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });*/
    }

    public render(){
        return <Page showDrawer = { this._showDrawer } hideDrawer = { this._hideDrawer } />
    }
}

const mapStateToProps = (state: MainStore) => {  
    return {
    };
  };
  
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EmpleoyeeClass);
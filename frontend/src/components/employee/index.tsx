import * as React from "react";
import { connect } from "react-redux";
import { IEmployeeProps, IEmployeeState } from "./IEmployee";

import { IStore } from "../../redux/namespace";
import { ActionNameEnum } from "../../redux/action";

import Page from "./page";
import DrawerPage from "./drawer/page";
import { ColumnProps } from "antd/lib/table";
import { subspace } from "redux-subspace";
import { EmployeeNamespace } from "../../common/enum/employee/enumEmployee";

import store from "../../redux/store";


export class EmpleoyeeClass extends React.Component<IEmployeeProps, IEmployeeState> {

  private _tableController = subspace( (state: IStore) => state.tableEmployee, EmployeeNamespace.table )(store);
  private _drawerController = subspace( (state: IStore) => state.drawerEmployee, EmployeeNamespace.drawer )(store);
  private _hierarchyController = subspace( (state: IStore) => state.hierarchyInputEmployee, EmployeeNamespace.hierarchy )(store);
  private _salaryController = subspace( (state: IStore) => state.salaryInputEmployee, EmployeeNamespace.salary )(store);

    constructor(props:IEmployeeProps) {
        super(props);

        this._tableController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            columns: this._createColumns()
        }});

        this._drawerController.dispatch({ type: ActionNameEnum.createElemet, payload: {
          title: "Empleado",
          onClose: () => this._hideDrawer(),
          width: '700px',
          body: <DrawerPage onAccept = { this._HttpRequest } />
        }});

        this._hierarchyController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            type: "text",
            placeholder: "Cargo",
            label: "Cargo",
            value: "",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._hierarchyController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
        }});

        this._salaryController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            type: "text",
            placeholder: "Salario",
            label: "Salario",
            value: 0,
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._salaryController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
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
      this._drawerController.dispatch({ type: ActionNameEnum.hideElement, payload: true});
    }

    private _hideDrawer = () => {
      this._drawerController.dispatch({ type: ActionNameEnum.hideElement, payload: false});
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

const mapStateToProps = (state: IStore) => {  
    return {
    };
  };
  
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EmpleoyeeClass);
import * as React from "react";
import { connect } from "react-redux";
import { IPersonProps, IPersonState } from "./IPerson";

import { MainStore } from "../../redux/namespace";

import Page from "./page";
import DrawerPage from "./drawer/page";
import { showDrawer, createDrawer } from "../../redux/action/general/drawer/_actionName";
import { createTable, loadDataTable } from "../../redux/action/general/table/_actionName";
import { ColumnProps } from "antd/lib/table";
import { subspace } from "redux-subspace";
import { PersonNamespace } from "../../common/enum/person/enumPerson";

import store from "../../redux/store";
import { createInput, changeValue } from "../../redux/action/general/input/_actionName";
import { Person } from "../../../../backend/src/model/core/person";
import { BaseService } from "../../common/baseService";


export class EmpleoyeeClass extends React.Component<IPersonProps, IPersonState> {

  private _tableController = subspace( (state: MainStore) => state.tablePerson, PersonNamespace.table )(store);
  private _drawerController = subspace( (state: MainStore) => state.drawerPerson, PersonNamespace.drawer )(store);
  private _hierarchyController = subspace( (state: MainStore) => state.hierarchyInputPerson, PersonNamespace.hierarchy )(store);
  private _salaryController = subspace( (state: MainStore) => state.salaryInputPerson, PersonNamespace.salary )(store);

    constructor(props:IPersonProps) {
        super(props);

        this._tableController.dispatch({ type: createTable, payload: {
            columns: this._createColumns()
        }});

        this._drawerController.dispatch({ type: createDrawer, payload: {
          title: "Empleado",
          onClose: () => this._hideDrawer(),
          width: '700px',
          body: <DrawerPage onAccept = { null } />
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

        this._LoadPerson()
    }
    
    private _createColumns = ():ColumnProps<Person>[] => {
        return [
            {
                title: 'First name',
                dataIndex: 'first_name',
                key: 'first_name',
              },
              {
                title: 'Second name',
                dataIndex: 'second_name',
                key: 'second_name',
              },
              {
                title: 'First lastname',
                dataIndex: 'first_lastname',
                key: 'first_lastname',
              },
              {
                title: 'Second lastname',
                dataIndex: 'second_lastname',
                key: 'second_lastname',
              },
              {
                title: 'Telephone',
                dataIndex: 'telephone',
                key: 'telephone',
              },
              {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
              },
              {
                title: 'Birthdate',
                dataIndex: 'birthdate',
                key: 'birthdate',
              },
              {
                title: 'Date create',
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

    public _LoadPerson = async() => {
      const response = await (new BaseService().HttpRequest("GET","persona"));
      if(response.success){
        this._tableController.dispatch({ type: loadDataTable, payload: response.data });
      }
      
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
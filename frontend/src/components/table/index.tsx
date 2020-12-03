import * as React from "react";
import { connect } from "react-redux";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { ITableProps, ITableState } from "./ITable";

import { IStore } from "../../redux/namespace";
import { ActionNameEnum } from "../../redux/action";

import Page from "./page";
import DrawerPage from "./drawer/page";
import { ColumnProps } from "antd/lib/table";
import { subspace } from "redux-subspace";
import { TableNamespace } from "../../common/enum/table/enumTable";

import store from "../../redux/store";
import { Table } from "../../../../backend/src/model/core/Table";
import { BaseService, IBaseService } from "../../common/baseService";
import { Button } from "antd";

export class TableClass extends React.Component<ITableProps, ITableState> {

  private _tableController = subspace( (state: IStore) => state.tableTable, TableNamespace.table )(store);
  private _drawerController = subspace( (state: IStore) => state.drawerTable, TableNamespace.drawer )(store);
  private _idTableController = subspace( (state: IStore) => state.idInputTable, TableNamespace.id )(store);
  private _nameController = subspace( (state: IStore) => state.nameInputTable, TableNamespace.name )(store);
  private _capacityController = subspace( (state: IStore) => state.capacityInputTable, TableNamespace.capacity )(store);

  private _httpController:string = "mesa";

    constructor(props:ITableProps) {
        super(props);

        this._tableController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            columns: this._createColumns()
        }});

        this._drawerController.dispatch({ type: ActionNameEnum.createElemet, payload: {
          title: "Mesa",
          onClose: () => this._hideDrawer(),
          width: '700px',
          body: <DrawerPage onAccept = { this._SaveTable } hideDrawer = { this._hideDrawer } />
        }});

        this._idTableController.dispatch({ type: ActionNameEnum.createElemet, payload: {
          type: "hidden",
          value: null
        }});

        this._nameController.dispatch({ type: ActionNameEnum.createElemet, payload: {
          type: "text",
          placeholder: "Nombre",
          label: "Nombre de la mesa",
          onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._nameController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
        }});

        this._capacityController.dispatch({ type: ActionNameEnum.createElemet, payload: {
          type: "number",
          placeholder: "Capacidad",
          label: "Capacidad de personas",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._capacityController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
            
        }});

        this._LoadAllTable()
    }
    
    private _createColumns = ():ColumnProps<Table>[] => {
        return [
            {
                title: 'Nombre',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Capacidad',
                dataIndex: 'capacity',
                key: 'capacity',
              },
              {
                title: '',
                key: 'action',
                fixed: 'right',
                width: 100,
                render: (text, item) => <div>
                  <Button onClick={ () => { this._LoadTable(item); } }><EditOutlined /></Button>
                  <Button onClick={ () => { this._DeleteTable(item); } }><DeleteOutlined /></Button>
                </div>
              },
        ];
    }

    private _showDrawer = () => {
      this._ClearInputs();
      this._drawerController.dispatch({ type: ActionNameEnum.hideElement, payload: true });
    }

    private _hideDrawer = () => {
      this._drawerController.dispatch({ type: ActionNameEnum.hideElement, payload: false });
      this._idTableController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
    }

    private _LoadAllTable = async() => {
      const parameters:IBaseService = { controller: this._httpController, method: "GET" }
      const response = await (new BaseService().HttpRequest(parameters));
      
      if(response.success){
        response.data.forEach((x:any) => {
          x.key = x._id;
        });
        
        this._tableController.dispatch({ type: ActionNameEnum.loadItems, payload: response.data });
      }
    }

    private _SaveTable = async () => {
      let parameters:IBaseService = { controller: `${this._httpController }/save`, method: "POST" }

      parameters.body = {
        id              : this._idTableController.getState().value,
        name            : this._nameController.getState().value,
        capacity        : this._capacityController.getState().value,
      };

      const response = await (new BaseService().HttpRequest(parameters));
      if(response.success){
        this._LoadAllTable();
        this._hideDrawer();
      }
    }

    private _LoadTable = async (item:Table) => {
      this._showDrawer();
      this._idTableController.dispatch({ type: ActionNameEnum.changeValue, payload: item._id });
      this._nameController.dispatch({ type: ActionNameEnum.changeValue, payload: item.name });
      this._capacityController.dispatch({ type: ActionNameEnum.changeValue, payload: item.capacity });
    }

    private _DeleteTable = async (item:Table) => {
      let parameters:IBaseService = { controller: `${this._httpController }/disable`, method: "POST" }

      parameters.body = {
        ...item
      };

      const response = await (new BaseService().HttpRequest(parameters));
      if(response.success){
        this._LoadAllTable();
      }
    }

    private _ClearInputs = () => {
      this._idTableController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
      this._nameController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
      this._capacityController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
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

export default connect(mapStateToProps, mapDispatchToProps)(TableClass);
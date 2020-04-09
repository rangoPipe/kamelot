import * as React from "react";
import { connect } from "react-redux";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import moment, { Moment } from "moment";

import { IProviderProps, IProviderState } from "./IProvider";

import { MainStore } from "../../redux/namespace";

import Page from "./page";
import DrawerPage from "./drawer/page";
import { showDrawer, createDrawer } from "../../redux/action/general/drawer/_actionName";
import { createTable, loadDataTable } from "../../redux/action/general/table/_actionName";
import { createDatepicker, changeValue as changeDate } from "../../redux/action/general/datepicker/_actionName";
import { ColumnProps } from "antd/lib/table";
import { subspace } from "redux-subspace";
import { ProviderNamespace } from "../../common/enum/provider/enumProvider";

import store from "../../redux/store";
import { createInput, changeValue } from "../../redux/action/general/input/_actionName";
import { Provider } from "../../../../backend/src/model/core/Provider";
import { BaseService, IBaseService } from "../../common/baseService";
import { Button } from "antd";

export class ProviderClass extends React.Component<IProviderProps, IProviderState> {

  private _tableController = subspace( (state: MainStore) => state.tableProvider, ProviderNamespace.table )(store);
  private _drawerController = subspace( (state: MainStore) => state.drawerProvider, ProviderNamespace.drawer )(store);
  private _idProviderController = subspace( (state: MainStore) => state.idInputProvider, ProviderNamespace.id )(store);
  private _nameController = subspace( (state: MainStore) => state.nameInputProvider, ProviderNamespace.name )(store);
  private _dateContractController = subspace( (state: MainStore) => state.dateContractDatepickerProvider, ProviderNamespace.dateContract )(store);

  private _httpController:string = "proveedor";
  private _formateDate:string = "DD/MM/YYYY";

    constructor(props:IProviderProps) {
        super(props);

        this._tableController.dispatch({ type: createTable, payload: {
            columns: this._createColumns()
        }});

        this._drawerController.dispatch({ type: createDrawer, payload: {
          title: "Proveedor",
          onClose: () => this._hideDrawer(),
          width: '700px',
          body: <DrawerPage onAccept = { this._SaveProvider } hideDrawer = { this._hideDrawer } />
        }});

        this._idProviderController.dispatch({ type: createInput, payload: {
          type: "hidden",
          value: null
        }});

        this._nameController.dispatch({ type: createInput, payload: {
          type: "text",
          placeholder: "Nombre",
          label: "Nombre del proveedor",
          onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._nameController.dispatch({ type: changeValue, payload: e.target.value })
        }});

        this._dateContractController.dispatch({ type: createDatepicker, payload: {
            label: "Fecha inicial",
            format: this._formateDate,
            onChange: (e:Moment) =>  this._dateContractController.dispatch({ type: changeDate, payload: e })
            
        }});

        this._LoadAllProvider()
    }
    
    private _createColumns = ():ColumnProps<Provider>[] => {
        return [
            {
                title: 'Nombre',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Fecha inicio',
                dataIndex: 'dateContract',
                key: 'dateContract',
                render: (text,item) => <span>{ moment(text).format(this._formateDate) }</span>
              },
              {
                title: '',
                key: 'action',
                fixed: 'right',
                width: 100,
                render: (text, item) => <div>
                  <Button onClick={ () => { this._LoadProvider(item); } }><EditOutlined /></Button>
                  <Button onClick={ () => { this._DeleteProvider(item); } }><DeleteOutlined /></Button>
                </div>
              },
        ];
    }

    private _showDrawer = () => {
      this._ClearInputs();
      this._drawerController.dispatch({ type: showDrawer, payload: true });
    }

    private _hideDrawer = () => {
      this._drawerController.dispatch({ type: showDrawer, payload: false });
      this._idProviderController.dispatch({ type: changeValue, payload: null });
    }

    private _LoadAllProvider = async() => {
      const parameters:IBaseService = { controller: this._httpController, method: "GET" }
      const response = await (new BaseService().HttpRequest(parameters));
      
      if(response.success){
        response.data.forEach((x:any) => {
          x.key = x._id;
        });
        
        this._tableController.dispatch({ type: loadDataTable, payload: response.data });
      }
    }

    private _SaveProvider = async () => {
      let parameters:IBaseService = { controller: `${this._httpController }/save`, method: "POST" }

      parameters.body = {
        id              : this._idProviderController.getState().value,
        name            : this._nameController.getState().value,
        dateContract    : this._dateContractController.getState().value,
      };

      const response = await (new BaseService().HttpRequest(parameters));
      if(response.success){
        this._LoadAllProvider();
        this._hideDrawer();
      }
    }

    private _LoadProvider = async (item:Provider) => {
      this._showDrawer();
      this._idProviderController.dispatch({ type: changeValue, payload: item._id });
      this._nameController.dispatch({ type: changeValue, payload: item.name });
      this._dateContractController.dispatch({ type: changeDate, payload: moment(item.dateContract)});
    }

    private _DeleteProvider = async (item:Provider) => {
      let parameters:IBaseService = { controller: `${this._httpController }/disable`, method: "POST" }

      parameters.body = {
        ...item
      };

      const response = await (new BaseService().HttpRequest(parameters));
      if(response.success){
        this._LoadAllProvider();
      }
    }

    private _ClearInputs = () => {
      this._idProviderController.dispatch({ type: changeValue, payload: null });
      this._nameController.dispatch({ type: changeValue, payload: null });
      this._dateContractController.dispatch({ type: changeDate, payload: null });
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

export default connect(mapStateToProps, mapDispatchToProps)(ProviderClass);
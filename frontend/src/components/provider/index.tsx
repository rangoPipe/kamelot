import * as React from "react";
import { connect } from "react-redux";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import moment from "moment";

import { IProviderProps, IProviderState } from "./IProvider";

import { IStore } from "../../redux/namespace";
import { ActionNameEnum } from "../../redux/action";

import Page from "./page";
import DrawerPage from "./drawer/page";
import { ColumnProps } from "antd/lib/table";
import { subspace } from "redux-subspace";
import { ProviderNamespace } from "../../common/enum/provider/enumProvider";

import store from "../../redux/store";
import { IProvider } from "../../../../backend/src/model/common/provider";
import { BaseService, IBaseService } from "../../common/baseService";
import { Button } from "antd";

export class ProviderClass extends React.Component<IProviderProps, IProviderState> {

  private _tableController = subspace((state: IStore) => state.tableProvider, ProviderNamespace.table)(store);
  private _drawerController = subspace((state: IStore) => state.drawerProvider, ProviderNamespace.drawer)(store);
  private _idProviderController = subspace((state: IStore) => state.idInputProvider, ProviderNamespace.id)(store);
  private _nameController = subspace((state: IStore) => state.nameInputProvider, ProviderNamespace.name)(store);
  private _dateContractController = subspace((state: IStore) => state.dateContractDatepickerProvider, ProviderNamespace.dateContract)(store);

  private _httpController: string = "proveedor";
  private _formateDate: string = "DD/MM/YYYY";

  constructor(props: IProviderProps) {
    super(props);

    this._tableController.dispatch({
      type: ActionNameEnum.createElemet, payload: {
        columns: this._createColumns()
      }
    });

    this._drawerController.dispatch({
      type: ActionNameEnum.createElemet, payload: {
        title: "Proveedor",
        onClose: () => this._hideDrawer(),
        width: '700px',
        body: <DrawerPage onAccept={this._SaveProvider} hideDrawer={this._hideDrawer} />
      }
    });

    this._idProviderController.dispatch({
      type: ActionNameEnum.createElemet, payload: {
        type: "hidden",
        value: null,
        hidden: true,
      }
    });

    this._nameController.dispatch({
      type: ActionNameEnum.createElemet, payload: {
        type: "text",
        placeholder: "Nombre",
        label: "Nombre del proveedor",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => this._nameController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
      }
    });

    this._dateContractController.dispatch({
      type: ActionNameEnum.createElemet, payload: {
        label: "Fecha inicial",
        value: new Date(),
        onChange: (date: Date, value?: string) =>  this._dateContractController.dispatch({ type: ActionNameEnum.changeValue, payload: date })
      }
    });

    this._LoadAllProvider()
  }

  private _createColumns = (): ColumnProps<IProvider>[] => {
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
        render: (text, item) => <span>{moment(text).format(this._formateDate)}</span>
      },
      {
        title: '',
        key: 'action',
        fixed: 'right',
        width: 100,
        render: (text, item) => <div>
          <Button onClick={() => { this._LoadProvider(item); }}><EditOutlined /></Button>
          <Button onClick={() => { this._DeleteProvider(item); }}><DeleteOutlined /></Button>
        </div>
      },
    ];
  }

  private _showDrawer = () => {
    this._ClearInputs();
    this._drawerController.dispatch({ type: ActionNameEnum.showElement, payload: true });
  }

  private _hideDrawer = () => {
    this._drawerController.dispatch({ type: ActionNameEnum.showElement, payload: false });
    this._idProviderController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
  }

  private _LoadAllProvider = async () => {
    const parameters: IBaseService = { controller: this._httpController, method: "GET" }
    const response = await (new BaseService().HttpRequest(parameters));

    if (response.success) {
      response.data.forEach((x: any) => {
        x.key = x._id;
      });

      this._tableController.dispatch({ type: ActionNameEnum.loadItems, payload: response.data });
    }
  }

  private _SaveProvider = async () => {
    let parameters: IBaseService = { controller: `${this._httpController}/save`, method: "POST" }

    parameters.body = {
      id: this._idProviderController.getState().value,
      name: this._nameController.getState().value,
      dateContract: this._dateContractController.getState().value,
    };

    const response = await (new BaseService().HttpRequest(parameters));
    if (response.success) {
      this._LoadAllProvider();
      this._hideDrawer();
    }
  }

  private _LoadProvider = async (item: IProvider) => {
    this._showDrawer();
    this._idProviderController.dispatch({ type: ActionNameEnum.changeValue, payload: item._id });
    this._nameController.dispatch({ type: ActionNameEnum.changeValue, payload: item.name });
    this._dateContractController.dispatch({ type: ActionNameEnum.changeValue, payload: moment(item.dateContract) });
  }

  private _DeleteProvider = async (item: IProvider) => {
    let parameters: IBaseService = { controller: `${this._httpController}/disable`, method: "POST" }

    parameters.body = {
      ...item
    };

    const response = await (new BaseService().HttpRequest(parameters));
    if (response.success) {
      this._LoadAllProvider();
    }
  }

  private _ClearInputs = () => {
    this._idProviderController.dispatch({ type: ActionNameEnum.changeValue, payload: "" });
    this._nameController.dispatch({ type: ActionNameEnum.changeValue, payload: "" });
    this._dateContractController.dispatch({ type: ActionNameEnum.changeValue, payload: new Date() });
  }

  public render() {
    return <Page showDrawer={this._showDrawer} hideDrawer={this._hideDrawer} />
  }
}

const mapStateToProps = (state: IStore) => {
  return {
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderClass);
import * as React from "react";
import { connect } from "react-redux";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { IPurchaseProps, IPurchaseState } from "./IPurchase";

import { MainStore } from "../../redux/namespace";

import Page from "./page";
import DrawerPage from "./drawer/page";
import { showDrawer, createDrawer } from "../../redux/action/general/drawer/_actionName";
import { createTable, loadDataTable } from "../../redux/action/general/table/_actionName";
import { ColumnProps } from "antd/lib/table";
import { subspace } from "redux-subspace";
import { PurchaseNamespace } from "../../common/enum/purchase/enumPurchase";

import store from "../../redux/store";
import { createInput, changeValue } from "../../redux/action/general/input/_actionName";
import { Purchase } from "../../../../backend/src/model/purchase";
import { BaseService, IBaseService } from "../../common/baseService";
import { Button } from "antd";
import { IOption } from "../../redux/reducer/general/select/ISelect";
import { Product } from "../../../../backend/src/model/core/product";
import { loadItems, createSelect, changeValue as changeSelect} from "../../redux/action/general/select/_actionName";

export class PurchaseClass extends React.Component<IPurchaseProps, IPurchaseState> {

  private _tableController = subspace((state: MainStore) => state.tablePurchase, PurchaseNamespace.table)(store);
  private _drawerController = subspace((state: MainStore) => state.drawerPurchase, PurchaseNamespace.drawer)(store);
  private _idPurchaseController = subspace((state: MainStore) => state.idInputPurchase, PurchaseNamespace.id)(store);
  private _costbuyController = subspace((state: MainStore) => state.costbuyInputPurchase, PurchaseNamespace.costBuy)(store);
  private _costsaleController = subspace((state: MainStore) => state.costsaleInputPurchase, PurchaseNamespace.costSale)(store);
  private _quantityController = subspace((state: MainStore) => state.quantityInputPurchase, PurchaseNamespace.quantity)(store);
  private _productController = subspace((state: MainStore) => state.productSelectPurchase, PurchaseNamespace.product)(store);
  
  private _productOptions: IOption[];
  private _httpController: string = "compra";

  constructor(props: IPurchaseProps) {
    super(props);

    this._tableController.dispatch({
      type: createTable, payload: {
        columns: this._createColumns()
      }
    });

    this._drawerController.dispatch({
      type: createDrawer, payload: {
        title: "Compra",
        onClose: () => this._hideDrawer(),
        width: '700px',
        body: <DrawerPage onAccept={this._SavePurchase} hideDrawer={this._hideDrawer} />
      }
    });

    this._idPurchaseController.dispatch({
      type: createInput, payload: {
        type: "hidden",
        value: null
      }
    });

    this._costbuyController.dispatch({
      type: createInput, payload: {
        type: "number",
        placeholder: "Precio costo",
        label: "Precio costo",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => this._costbuyController.dispatch({ type: changeValue, payload: e.target.value })
      }
    });

    this._costsaleController.dispatch({
      type: createInput, payload: {
        type: "number",
        placeholder: "Precio venta",
        label: "Precio venta",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => this._costsaleController.dispatch({ type: changeValue, payload: e.target.value })
      }
    });

    this._quantityController.dispatch({
      type: createInput, payload: {
        type: "number",
        placeholder: "Cantidad",
        label: "Cantidad",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => this._quantityController.dispatch({ type: changeValue, payload: e.target.value })
      }
    });

    this._productController.dispatch({ type: createSelect, payload : {
      placeholder: "Seleccione producto",
      label: "Producto",
      onChange: (value:string) =>  this._productController.dispatch({ type: changeSelect, payload: value })
    }})

    this._LoadAllPurchase();
    this._GetAllProducts();
  }

  private _createColumns = (): ColumnProps<Purchase>[] => {
    return [
      {
        title: 'Nombre',
        dataIndex: 'product.name',
        key: 'product.name',
      },
      {
        title: 'Cantidad',
        dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'Precio compra',
        dataIndex: 'costBuy',
        key: 'costBuy',
      },
      {
        title: 'Precio venta',
        dataIndex: 'costSale',
        key: 'costSale',
      },
      {
        title: '',
        key: 'action',
        fixed: 'right',
        width: 100,
        render: (text, item) => <div>
          <Button onClick={() => { this._LoadPurchase(item); }}><EditOutlined /></Button>
          <Button onClick={() => { this._DeletePurchase(item); }}><DeleteOutlined /></Button>
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
    this._idPurchaseController.dispatch({ type: changeValue, payload: null });
  }

  private _LoadAllPurchase = async () => {
    const parameters: IBaseService = { controller: this._httpController, method: "GET" }
    const response = await (new BaseService().HttpRequest(parameters));

    if (response.success) {
      response.data.forEach((x: any) => {
        x.key = x._id;
      });

      this._tableController.dispatch({ type: loadDataTable, payload: response.data });
    }
  }
  
  private _GetAllProducts = async () => {
    const parameters:IBaseService = { controller: "producto", method: "GET" }
    const response = await (new BaseService().HttpRequest(parameters));
    
    if(response.success){
     this._productOptions = response.data.map((x:Product) => {
        return { value: x._id, label: x.name, key: x._id };
      });
      
      this._productController.dispatch({ type: loadItems, payload: this._productOptions });
    }
  }

  private _SavePurchase = async () => {
    let parameters: IBaseService = { controller: `${this._httpController}/save`, method: "POST" }

    parameters.body = {
      id: this._idPurchaseController.getState().value,
      costBuy: this._costbuyController.getState().value,
      costSale: this._costsaleController.getState().value,
      quantity: this._quantityController.getState().value,
      product: this._productController.getState().value,
    };

    const response = await (new BaseService().HttpRequest(parameters));
    if (response.success) {
      this._LoadAllPurchase();
      this._hideDrawer();
    }
  }

  private _LoadPurchase = async (item: Purchase) => {
    this._showDrawer();
    this._idPurchaseController.dispatch({ type: changeValue, payload: item._id });
    this._costbuyController.dispatch({ type: changeValue, payload: item.costBuy });
    this._costsaleController.dispatch({ type: changeValue, payload: item.costSale });
    this._quantityController.dispatch({ type: changeValue, payload: item.quantity });
  }

  private _DeletePurchase = async (item: Purchase) => {
    let parameters: IBaseService = { controller: `${this._httpController}/disable`, method: "POST" }

    parameters.body = {
      ...item
    };

    const response = await (new BaseService().HttpRequest(parameters));
    if (response.success) {
      this._LoadAllPurchase();
    }
  }

  private _ClearInputs = () => {
    this._idPurchaseController.dispatch({ type: changeValue, payload: null });
    this._costbuyController.dispatch({ type: changeValue, payload: null });
    this._costsaleController.dispatch({ type: changeValue, payload: null });
    this._quantityController.dispatch({ type: changeValue, payload: null });
  }

  public render() {
    return <Page showDrawer={this._showDrawer} hideDrawer={this._hideDrawer} />
  }
}

const mapStateToProps = (state: MainStore) => {
  return {
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseClass);
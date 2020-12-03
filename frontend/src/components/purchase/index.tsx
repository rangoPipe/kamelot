import * as React from "react";
import { connect } from "react-redux";
import { subspace } from "redux-subspace";

import { Button } from "@material-ui/core";
import { ColumnProps } from "antd/lib/table";

import { IPurchaseProps, IPurchaseState } from "./IPurchase";

import { IStore } from "../../redux/namespace";
import { ActionNameEnum } from "../../redux/action";

import Page from "./page";
import DrawerPage from "./drawer/page";
import { PurchaseNamespace } from "../../common/enum/purchase/enumPurchase";

import store from "../../redux/store";
import { Purchase } from "../../../../backend/src/model/purchase";
import { BaseService, IBaseService } from "../../common/baseService";
import { ISelectItemProps } from "../../redux/reducers/general/select/ISelect";
import { Product } from "../../../../backend/src/model/core/product";

export class PurchaseClass extends React.Component<IPurchaseProps, IPurchaseState> {

  private _tableController = subspace((state: IStore) => state.tablePurchase, PurchaseNamespace.table)(store);
  private _drawerController = subspace((state: IStore) => state.drawerPurchase, PurchaseNamespace.drawer)(store);
  private _idPurchaseController = subspace((state: IStore) => state.idInputPurchase, PurchaseNamespace.id)(store);
  private _costbuyController = subspace((state: IStore) => state.costbuyInputPurchase, PurchaseNamespace.costBuy)(store);
  private _costsaleController = subspace((state: IStore) => state.costsaleInputPurchase, PurchaseNamespace.costSale)(store);
  private _quantityController = subspace((state: IStore) => state.quantityInputPurchase, PurchaseNamespace.quantity)(store);
  private _productController = subspace((state: IStore) => state.productSelectPurchase, PurchaseNamespace.product)(store);
  
  private _productOptions: ISelectItemProps[];
  private _httpController: string = "compra";

  constructor(props: IPurchaseProps) {
    super(props);

    this._tableController.dispatch({
      type: ActionNameEnum.createElemet, payload: {
        columns: this._createColumns()
      }
    });

    this._drawerController.dispatch({
      type: ActionNameEnum.createElemet, payload: {
        title: "Compra",
        onClose: () => this._hideDrawer(),
        width: '700px',
        body: <DrawerPage onAccept={this._SavePurchase} hideDrawer={this._hideDrawer} />
      }
    });

    this._idPurchaseController.dispatch({ type: ActionNameEnum.createElemet, payload: {
      type: "hidden",
      value: null,
      hidden: true,
    }});

    this._costbuyController.dispatch({
      type: ActionNameEnum.createElemet, payload: {
        type: "number",
        placeholder: "Precio costo",
        label: "Precio costo",
        value: "para nada",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => this._costbuyController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
      }
    });

    this._costsaleController.dispatch({
      type: ActionNameEnum.createElemet, payload: {
        type: "number",
        placeholder: "Precio venta",
        label: "Precio venta",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => this._costsaleController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
      }
    });

    this._quantityController.dispatch({
      type: ActionNameEnum.createElemet, payload: {
        type: "number",
        placeholder: "Cantidad",
        label: "Cantidad",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => this._quantityController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
      }
    });

    this._productController.dispatch({ type: ActionNameEnum.createElemet, payload : {
      placeholder: "Seleccione producto",
      label: "Producto",
      onChange: (e: React.ChangeEvent<HTMLSelectElement>, payload:ISelectItemProps) => this._productController.dispatch({ type:ActionNameEnum.changeValue, payload })
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
          <Button onClick={() => { this._LoadPurchase(item); }}>E</Button>
          <Button onClick={() => { this._DeletePurchase(item); }}>D</Button>
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
    this._idPurchaseController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
  }

  private _LoadAllPurchase = async () => {
    const parameters: IBaseService = { controller: this._httpController, method: "GET" }
    const response = await (new BaseService().HttpRequest(parameters));

    if (response.success) {
      response.data.forEach((x: any) => {
        x.key = x._id;
      });

      this._tableController.dispatch({ type: ActionNameEnum.loadItems, payload: response.data });
    }
  }
  
  private _GetAllProducts = async () => {
    const parameters:IBaseService = { controller: "producto", method: "GET" }
    const response = await (new BaseService().HttpRequest(parameters));
    
    if(response.success){
     this._productOptions = response.data.map((x:Product) => {
        return {...x, value: x._id, text: x.name, key: x._id };
      });
      
      this._productController.dispatch({ type: ActionNameEnum.loadItems, payload: this._productOptions });
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

    console.log(this._productController.getState());    

    const response = await (new BaseService().HttpRequest(parameters));
    if (response.success) {
      this._LoadAllPurchase();
      this._hideDrawer();
    }
  }

  private _LoadPurchase = async (item: Purchase) => {
    this._idPurchaseController.dispatch({ type: ActionNameEnum.changeValue, payload: item._id });
    this._costbuyController.dispatch({ type: ActionNameEnum.changeValue, payload: item.costBuy });
    this._costsaleController.dispatch({ type: ActionNameEnum.changeValue, payload: item.costSale });
    this._quantityController.dispatch({ type: ActionNameEnum.changeValue, payload: item.quantity });
    this._productController.dispatch({ type: ActionNameEnum.changeValue, payload: {...item.product, text: item.product.name } });
    this._showDrawer();
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
    this._idPurchaseController.dispatch({ type: ActionNameEnum.changeValue, payload: "" });
    this._costbuyController.dispatch({ type: ActionNameEnum.changeValue, payload: "" });
    this._costsaleController.dispatch({ type: ActionNameEnum.changeValue, payload: "" });
    this._quantityController.dispatch({ type: ActionNameEnum.changeValue, payload: "" });
    this._productController.dispatch({type: ActionNameEnum.changeValue, payload: undefined})
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

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseClass);
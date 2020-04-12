import * as React from "react";
import { connect } from "react-redux";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { IProductProps, IProductState } from "./IProduct";

import { MainStore } from "../../redux/namespace";

import Page from "./page";
import DrawerPage from "./drawer/page";
import { showDrawer, createDrawer } from "../../redux/action/general/drawer/_actionName";
import { createTable, loadDataTable } from "../../redux/action/general/table/_actionName";
import { ColumnProps } from "antd/lib/table";
import { subspace } from "redux-subspace";

import store from "../../redux/store";
import { createInput, changeValue } from "../../redux/action/general/input/_actionName";
import { BaseService, IBaseService } from "../../common/baseService";
import { Button } from "antd";
import { ProductNamespace } from "../../common/enum/product/enumProduct";
import { Product } from "../../../../backend/src/model/core/product";
import { createSelect, loadItems, changeValue as changeSelect, changeDefaultValue } from "../../redux/action/general/select/_actionName";
import { Provider } from "../../../../backend/src/model/core/provider";
import { IOption } from "../../redux/reducer/general/select/ISelect";

export class ProductClass extends React.Component<IProductProps, IProductState> {

  private _tableController = subspace( (state: MainStore) => state.tableProduct, ProductNamespace.table )(store);
  private _drawerController = subspace( (state: MainStore) => state.drawerProduct, ProductNamespace.drawer )(store);
  private _idProductController = subspace( (state: MainStore) => state.idInputProduct, ProductNamespace.id )(store);
  private _nameController = subspace( (state: MainStore) => state.nameInputProduct, ProductNamespace.name )(store);
  private _eanController = subspace( (state: MainStore) => state.eanInputProduct, ProductNamespace.ean )(store);
  private _purchaseController = subspace( (state: MainStore) => state.purchaseInputProduct, ProductNamespace.purchase )(store);
  private _saleController = subspace( (state: MainStore) => state.saleInputProduct, ProductNamespace.sale )(store);
  private _typematerialController = subspace( (state: MainStore) => state.typeMaterialInputProduct, ProductNamespace.typeMaterial )(store);
  private _providerController = subspace( (state: MainStore) => state.providerSelectProduct, ProductNamespace.provider )(store);

  private _httpController:string = "producto";
  private _formateDate:string = "DD/MM/YYYY";
  private _providerOptions:IOption;

    constructor(props:IProductProps) {
        super(props);

        this._tableController.dispatch({ type: createTable, payload: {
            columns: this._createColumns()
        }});

        this._drawerController.dispatch({ type: createDrawer, payload: {
          title: "Producto",
          onClose: () => this._hideDrawer(),
          width: '700px',
          body: <DrawerPage onAccept = { this._SaveProduct } hideDrawer = { this._hideDrawer } />
        }});

        this._idProductController.dispatch({ type: createInput, payload: {
          type: "hidden",
          value: null
        }});

        this._nameController.dispatch({ type: createInput, payload: {
          type: "text",
          placeholder: "Nombre",
          label: "Nombre del producto",
          onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._nameController.dispatch({ type: changeValue, payload: e.target.value })
        }});

        this._eanController.dispatch({ type: createInput, payload: {
            type: "number",
            placeholder: "Código EAN",
            label: "Código EAN",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._eanController.dispatch({ type: changeValue, payload: e.target.value })
        }});

        this._purchaseController.dispatch({ type: createInput, payload: {
            type: "number",
            placeholder: "Precio compra",
            label: "Precio de compra",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._purchaseController.dispatch({ type: changeValue, payload: e.target.value })
        }});

        this._saleController.dispatch({ type: createInput, payload: {
            type: "number",
            placeholder: "Precio venta",
            label: "Precio de venta",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._saleController.dispatch({ type: changeValue, payload: e.target.value })
        }});

        this._typematerialController.dispatch({ type: createInput, payload: {
            type: "text",
            placeholder: "Tipo producto",
            label: "Tipo",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._typematerialController.dispatch({ type: changeValue, payload: e.target.value })
        }});

        this._providerController.dispatch({ type: createSelect, payload: {
            placeholder: "Seleccione Proveedor",
            label: "Proveedor",
            onChange: (value:string) =>  this._providerController.dispatch({ type: changeSelect, payload: value })
        }});

        this._LoadAllProducts();
        this._GetAllProviders();
    }
    
    private _createColumns = ():ColumnProps<Product>[] => {
        return [
            {
                title: 'Nombre',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Código EAN',
                dataIndex: 'ean',
                key: 'ean',
              },
              {
                title: 'Precio compra',
                dataIndex: 'purchase',
                key: 'purchase',
              },
              {
                title: 'Precio venta',
                dataIndex: 'sale',
                key: 'sale',
              },
              {
                title: 'Tipo',
                dataIndex: 'typeMaterial',
                key: 'typeMaterial',
              },
              {
                title: '',
                key: 'action',
                fixed: 'right',
                width: 100,
                render: (text, item) => <div>
                  <Button onClick={ () => { this._LoadProduct(item); } }><EditOutlined /></Button>
                  <Button onClick={ () => { this._DeleteProduct(item); } }><DeleteOutlined /></Button>
                </div>
              },
        ];
    }

    private _showDrawer = (edit:boolean) => {
      this._drawerController.dispatch({ type: showDrawer, payload: true });
    }

    private _hideDrawer = () => {
      this._drawerController.dispatch({ type: showDrawer, payload: false });
      this._idProductController.dispatch({ type: changeValue, payload: null });
      this._ClearInputs();
      console.log(this._providerOptions);
      
    }

    private _LoadAllProducts = async() => {
      const parameters:IBaseService = { controller: this._httpController, method: "GET" }
      const response = await (new BaseService().HttpRequest(parameters));
      
      if(response.success){
        response.data.forEach((x:any) => {
          x.key = x._id;
        });
        
        this._tableController.dispatch({ type: loadDataTable, payload: response.data });
      }
    }

    private _GetAllProviders = async () => {
      const parameters:IBaseService = { controller: "proveedor", method: "GET" }
      const response = await (new BaseService().HttpRequest(parameters));
      
      if(response.success){
       this._providerOptions = response.data.map((x:Provider) => {
          return { value: x._id, label: x.name, key: x._id };
        });
        
        this._providerController.dispatch({ type: loadItems, payload: this._providerOptions });
      }
    }

    private _SaveProduct = async () => {
      let parameters:IBaseService = { controller: `${this._httpController }/save`, method: "POST" }

      parameters.body = {
        id              : this._idProductController.getState().value,
        name            : this._nameController.getState().value,
        ean             : this._eanController.getState().value,
        typeMaterial    : this._typematerialController.getState().value,
        sale            : this._saleController.getState().value,
        purchase        : this._purchaseController.getState().value,
        provider        : this._providerController.getState().value,
      };

      const response = await (new BaseService().HttpRequest(parameters));
      if(response.success){
        this._LoadAllProducts();
        this._hideDrawer();
      }
    }

    private _LoadProduct = async (item:Product) => {
      
      this._idProductController.dispatch({ type: changeValue, payload: item._id });
      this._nameController.dispatch({ type: changeValue, payload: item.name });
      this._eanController.dispatch({ type: changeValue, payload: item.ean });
      this._typematerialController.dispatch({ type: changeValue, payload: item.typeMaterial });
      this._saleController.dispatch({ type: changeValue, payload: item.sale });
      this._purchaseController.dispatch({ type: changeValue, payload: item.purchase });
      this._providerController.dispatch({ type: changeDefaultValue, payload: item.provider._id });
      this._showDrawer(true);
    }

    private _DeleteProduct = async (item:Product) => {
      let parameters:IBaseService = { controller: `${this._httpController }/disable`, method: "POST" }

      parameters.body = {
        ...item
      };

      const response = await (new BaseService().HttpRequest(parameters));
      if(response.success){
        this._LoadAllProducts();
      }
    }

    private _ClearInputs = () => {
      this._idProductController.dispatch({ type: changeValue, payload: null });
      this._nameController.dispatch({ type: changeValue, payload: null });
      this._eanController.dispatch({ type: changeValue, payload: null });
      this._saleController.dispatch({ type: changeValue, payload: null });
      this._purchaseController.dispatch({ type: changeValue, payload: null });
      this._typematerialController.dispatch({ type: changeValue, payload: null });
      this._providerController.dispatch({ type: changeDefaultValue, payload: undefined });
      
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductClass);
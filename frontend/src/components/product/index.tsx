import * as React from "react";
import { connect } from "react-redux";
import { subspace } from "redux-subspace";
import { MainStore } from "../../redux/namespace";
import { IProductState, IProductProps } from "./IProduct";
import Page from "./page";
import { ProductNamespace } from "../../common/enum/product/enumProduct";


import store from "../../redux/store";
import { ColumnProps } from "antd/lib/table";
import { createTable } from "../../redux/action/general/table/_actionName";
import { showDrawer, createDrawer } from "../../redux/action/general/drawer/_actionName";


export class ProductMain extends React.Component<IProductProps, IProductState> {
    constructor(props:IProductProps) {
        super(props);

        this._tableController.dispatch({ type: createTable, payload: {
            columns: this._createColumns()
        }});

        this._drawerController.dispatch({ type: createDrawer, payload: {
          title: "Producto",
          onClose: () => this._hideDrawer
        }})
    }
    
    private _tableController = subspace( (state: MainStore) => state.tableProduct, ProductNamespace.table )(store);
    private _drawerController = subspace( (state: MainStore) => state.drawerProduct, ProductNamespace.drawer )(store);


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

    public render(){
        return <Page  showDrawer = { this._showDrawer } hideDrawer = { this._hideDrawer } />
    }
}

const mapStateToProps = (state: MainStore) => {  
    return {
    };
  };
  
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductMain);
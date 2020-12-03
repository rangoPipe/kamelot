import * as React from "react";
import { connect } from "react-redux";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import moment from "moment";

import { IPersonProps, IPersonState } from "./IPerson";

import { IStore } from "../../redux/namespace";
import { ActionNameEnum } from "../../redux/action";

import Page from "./page";
import DrawerPage from "./drawer/page";
import { ColumnProps } from "antd/lib/table";
import { subspace } from "redux-subspace";
import { PersonNamespace } from "../../common/enum/person/enumPerson";

import store from "../../redux/store";

import { Person } from "../../../../backend/src/model/core/person";
import { BaseService, IBaseService } from "../../common/baseService";
import { Button } from "antd";

export class PersonClass extends React.Component<IPersonProps, IPersonState> {

  private _tableController = subspace( (state: IStore) => state.tablePerson, PersonNamespace.table )(store);
  private _drawerController = subspace( (state: IStore) => state.drawerPerson, PersonNamespace.drawer )(store);
  private _idPersonController = subspace( (state: IStore) => state.idInputPerson, PersonNamespace.id )(store);
  private _typeDocumentController = subspace( (state: IStore) => state.typeDocumentInputPerson, PersonNamespace.typeDocument )(store);
  private _numberDocumentController = subspace( (state: IStore) => state.numberDocumentInputPerson, PersonNamespace.numberDocument )(store);
  private _firstNameController = subspace( (state: IStore) => state.firstNameInputPerson, PersonNamespace.firstName )(store);
  private _secondNameController = subspace( (state: IStore) => state.secondNameInputPerson, PersonNamespace.secondName )(store);
  private _firstLastnameController = subspace( (state: IStore) => state.firstLastnameInputPerson, PersonNamespace.firstLastname )(store);
  private _secondLastnameController = subspace( (state: IStore) => state.secondLastnameInputPerson, PersonNamespace.secondLastname )(store);
  private _birthdayController = subspace( (state: IStore) => state.birthdayDatepickerPerson, PersonNamespace.birthday )(store);
  private _emailController = subspace( (state: IStore) => state.emailInputPerson, PersonNamespace.email )(store);
  private _telephoneController = subspace( (state: IStore) => state.telephoneInputPerson, PersonNamespace.telephone )(store);

  private _httpController:string = "persona";
  private _formateDate: string = "DD/MM/YYYY";

    constructor(props:IPersonProps) {
        super(props);

        this._tableController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            columns: this._createColumns()
        }});

        this._drawerController.dispatch({ type: ActionNameEnum.createElemet, payload: {
          title: "Persona",
          onClose: () => this._hideDrawer(),
          width: '700px',
          body: <DrawerPage onAccept = { this._SavePerson } hideDrawer = { this._hideDrawer } />
        }});

        this._idPersonController.dispatch({ type: ActionNameEnum.createElemet, payload: {
          type: "hidden",
          value: null
        }});

        this._typeDocumentController.dispatch({ type: ActionNameEnum.createElemet, payload: {
          type: "text",
          placeholder: "Tipo de documento",
          label: "Tipo de documento",
          value: "CC",
          onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._typeDocumentController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
        }});

        this._numberDocumentController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            type: "text",
            placeholder: "Número de documento",
            label: "Número de documento",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._numberDocumentController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
        }});

        this._firstNameController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            type: "text",
            placeholder: "Primer nombre",
            label: "Primer nombre",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._firstNameController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
        }});

        this._secondNameController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            type: "text",
            placeholder: "Segundo nombre",
            label: "Segundo nombre",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._secondNameController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
        }});

        this._firstLastnameController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            type: "text",
            placeholder: "Primer apellido",
            label: "Primer apellido",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._firstLastnameController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
        }});

        this._secondLastnameController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            type: "text",
            placeholder: "Segundo apellido",
            label: "Segundo apellido",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._secondLastnameController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
        }});

        this._telephoneController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            type: "text",
            placeholder: "Teléfono",
            label: "Teléfono",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._telephoneController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
        }});

        this._emailController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            type: "text",
            placeholder: "Email",
            label: "Email",
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._emailController.dispatch({ type: ActionNameEnum.changeValue, payload: e.target.value })
        }});

        this._birthdayController.dispatch({ type: ActionNameEnum.createElemet, payload: {
            label: "Fecha cumpleaños",
            format: this._formateDate,
            onChange: (e:React.ChangeEvent<HTMLInputElement>) =>  this._birthdayController.dispatch({ type: ActionNameEnum.changeValue, payload: e })
        }});

        this._LoadAllPerson()
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
                render: (text,item) => <span>{ moment(text).format(this._formateDate) }</span>
              },
              {
                title: '',
                key: 'action',
                fixed: 'right',
                width: 100,
                render: (text, item) => <div>
                  <Button onClick={ () => { this._Loadperson(item); } }><EditOutlined /></Button>
                  <Button onClick={ () => { this._DeletePerson(item); } }><DeleteOutlined /></Button>
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
      this._idPersonController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
    }

    private _LoadAllPerson = async() => {
      const parameters:IBaseService = { controller: this._httpController, method: "GET" }
      const response = await (new BaseService().HttpRequest(parameters));
      
      if(response.success){
        response.data.forEach((x:any) => {
          x.key = x._id;
        });
        
        this._tableController.dispatch({ type: ActionNameEnum.loadItems, payload: response.data });
      }
    }

    private _SavePerson = async () => {
      let parameters:IBaseService = { controller: `${this._httpController }/save`, method: "POST" }

      parameters.body = {
        id              : this._idPersonController.getState().value,
        typeDocument    : this._typeDocumentController.getState().value,
        number_document : this._numberDocumentController.getState().value,
        first_name      : this._firstNameController.getState().value,
        second_name     : this._secondNameController.getState().value,
        first_lastname  : this._firstLastnameController.getState().value,
        second_lastname : this._secondLastnameController.getState().value,
        telephone       : this._telephoneController.getState().value,
        email           : this._emailController.getState().value,
        birthdate       : this._birthdayController.getState().value,
      };

      const response = await (new BaseService().HttpRequest(parameters));
      if(response.success){
        this._LoadAllPerson();
        this._hideDrawer();
      }
    }

    private _Loadperson = async (item:Person) => {
      this._showDrawer();
      this._idPersonController.dispatch({ type: ActionNameEnum.changeValue, payload: item._id });
      this._typeDocumentController.dispatch({ type: ActionNameEnum.changeValue, payload: item.typeDocument });
      this._numberDocumentController.dispatch({ type: ActionNameEnum.changeValue, payload: item.number_document});
      this._firstNameController.dispatch({ type: ActionNameEnum.changeValue, payload: item.first_name });
      this._secondNameController.dispatch({ type: ActionNameEnum.changeValue, payload: item.second_name });
      this._firstLastnameController.dispatch({ type: ActionNameEnum.changeValue, payload: item.first_lastname });
      this._secondLastnameController.dispatch({ type: ActionNameEnum.changeValue, payload: item.second_lastname });
      this._telephoneController.dispatch({ type: ActionNameEnum.changeValue, payload: item.telephone });
      this._emailController.dispatch({ type: ActionNameEnum.changeValue, payload: item.email });
      this._birthdayController.dispatch({ type: ActionNameEnum.changeValue, payload: moment(item.birthdate) });
      
    }

    private _DeletePerson = async (item:Person) => {
      let parameters:IBaseService = { controller: `${this._httpController }/disable`, method: "POST" }

      parameters.body = {
        ...item
      };

      const response = await (new BaseService().HttpRequest(parameters));
      if(response.success){
        this._LoadAllPerson();
      }
    }

    private _ClearInputs = () => {
      this._idPersonController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
      this._typeDocumentController.dispatch({ type: ActionNameEnum.changeValue, payload: "CC" });
      this._numberDocumentController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
      this._firstNameController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
      this._secondNameController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
      this._firstLastnameController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
      this._secondLastnameController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
      this._telephoneController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
      this._emailController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
      this._birthdayController.dispatch({ type: ActionNameEnum.changeValue, payload: null });
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonClass);
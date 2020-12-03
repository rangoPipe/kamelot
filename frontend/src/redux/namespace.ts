import { ITreeViewProps } from "./reducers/general/treeView/ITreeView";
import { IButtonProps } from "./reducers/general/button/IButton";
import { ICardProps } from "./reducers/general/card/ICard";
import { IControlProps } from "./reducers/general/control/IControl";
import { ISelectProps } from "./reducers/general/select/ISelect";
import { ICheckProps } from "./reducers/general/check/ICheck";
import { ITextFieldProps } from "./reducers/general/textField/ITextField";
import { IDatePickerProps } from "./reducers/general/datePicker/IDatePicker";
import { IGridProps } from "./reducers/general/grid/IGrid";
import { IViewerProps } from "./reducers/general/viewer/IViewer";
import { ISnackbarProps } from "./reducers/general/snackbar/ISnackbar";
import { IDrawerProps } from "./reducers/general/drawer/IDrawer";
import { ITableProps } from "../redux/reducers/general/table/ITable";

export interface IStoreGeneral {
    button: IButtonProps;
    treeView: ITreeViewProps;
    card: ICardProps;
    control: IControlProps;
    textField: ITextFieldProps;
    select: ISelectProps;
    check: ICheckProps;
    datePicker: IDatePickerProps;
    grid: IGridProps;
    viewer: IViewerProps;
    snackbar: ISnackbarProps;   
    drawer:IDrawerProps;
    table: ITableProps
}

export interface IStore extends IStoreGeneral {
    //Product
    tableProduct: ITableProps;
    drawerProduct: IDrawerProps;
    idInputProduct: ITextFieldProps;
    nameInputProduct: ITextFieldProps;
    eanInputProduct: ITextFieldProps;
    purchaseInputProduct: ITextFieldProps;
    saleInputProduct: ITextFieldProps;
    typeMaterialInputProduct: ITextFieldProps;
    providerSelectProduct: ISelectProps;

    //Person
    tablePerson: ITableProps;
    drawerPerson: IDrawerProps;
    idInputPerson: ITextFieldProps;
    typeDocumentInputPerson: ITextFieldProps;
    numberDocumentInputPerson: ITextFieldProps;
    firstNameInputPerson: ITextFieldProps;
    secondNameInputPerson: ITextFieldProps;
    firstLastnameInputPerson: ITextFieldProps;
    secondLastnameInputPerson: ITextFieldProps;
    telephoneInputPerson: ITextFieldProps;
    emailInputPerson: ITextFieldProps;
    birthdayDatepickerPerson: IDatePickerProps;
    clientInputPerson: ITextFieldProps;
    empleoyeeInputPerson: ITextFieldProps;

    //Provider
    tableProvider: ITableProps;
    drawerProvider: IDrawerProps;
    idInputProvider: ITextFieldProps;
    nameInputProvider: ITextFieldProps;
    dateContractDatepickerProvider: IDatePickerProps;

    //Purchase
    tablePurchase: ITableProps;
    drawerPurchase: IDrawerProps;
    idInputPurchase: ITextFieldProps;
    costbuyInputPurchase: ITextFieldProps;
    costsaleInputPurchase: ITextFieldProps;
    quantityInputPurchase: ITextFieldProps;
    productSelectPurchase: ISelectProps;

    //Table
    tableTable: ITableProps;
    drawerTable: IDrawerProps;
    idInputTable: ITextFieldProps;
    nameInputTable: ITextFieldProps;
    capacityInputTable: ITextFieldProps;

    //Employee
    tableEmployee: ITableProps;
    drawerEmployee: IDrawerProps;
    hierarchyInputEmployee: ITextFieldProps;
    salaryInputEmployee: ITextFieldProps;
}
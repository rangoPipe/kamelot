import * as React from 'react';
import { connect } from 'react-redux';
import { MainStore } from '../../redux/namespace';
import { IMainProps, IMainState } from './IMain';
import Page from "./page";
import { collectioneName } from '../../common/enum/collectionName';

export class MainClass extends React.Component<IMainProps, IMainState> {

    constructor(props:IMainProps) {
        super(props);

        this.state = {
            content: null
        }
    }

    private _changeContent = (content:collectioneName) => {
        this.setState({...this.state, content})
    }

    render(){
        return <Page content = { this.state.content } onChange = { this._changeContent } />
    }
}

const mapStateToProps = (state: MainStore) => {  
    return {
    };
  };
  

export default connect(mapStateToProps, {})(MainClass);
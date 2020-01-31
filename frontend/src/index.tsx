import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';

import store from './redux/store';
import Main from './components/main';

const page = (
    <Provider store={store}>
        <Main/>
    </Provider>
    );

ReactDOM.render(page, document.getElementById('root'));
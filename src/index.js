import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reducers from './reducers';
import { App } from './components/App';
import { createStore } from 'redux';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
, document.querySelector('#root'));
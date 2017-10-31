import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Router from './Router';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
)

render(<App />, document.getElementById('root'));

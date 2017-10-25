import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './home/Home';
import About from './about/About';

const Router = () => (
    <main>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
    </main>
);

export default Router;

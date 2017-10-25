import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';

const Router = () => (
    <main>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
    </main>
);

export default Router;

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Router from './Router';

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

render(<App />, document.getElementById('root'));

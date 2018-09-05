import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductNew from './components/New';
import ProductIndex from './components/Index';

import './css/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/collapse';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar/>
          <Route path='/new' component={ProductNew}/>
          <Route exact path='/' component={ProductIndex}/>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

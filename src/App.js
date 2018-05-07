import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";

import Toolbar from './components/UI/Toolbar/Toolbar';
import Products from "./containers/Products/Products";
import NewProduct from "./containers/NewProduct/NewProduct";
import Register from "./containers/Register/Register";

class App extends Component {
  render() {
    return (
      <Fragment>
        <header><Toolbar/></header>
        <main className="container">
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/products/new" exact component={NewProduct} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home'
import Vender from './pages/Vender';
import Goods from './pages/Goods';
import Store from './pages/Store';
import Toolbar from "./components/Toolbar";
import NotFound from "./pages/NotFound";
import DataBase from './components/DataBase';

export default class App extends Component {
  data = new DataBase();
  constructor(props) {
    super(props);
    this.state = {
      data: this.data
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar />
          <div>
            <Switch>
              <Route exact path={`/`} render={props => (
                <Home
                  {...props} />
              )} />
              <Route path={`/Vender`} render={props => (
                <Vender
                  data = {this.data}
                  {...props} />
              )} />
              {<Route path={`/Goods`} render={props => (
                <Goods
                  data = {this.data}
                  {...props} />
              )} />}
               <Route path={`/Store`} render={props => (
                <Store                  
                 data = {this.data}
                  {...props} />
              )} />
              {/* <Route path={`/SummTabs`} render={props => (
                <SummTabs
                  ProvidersData={this.state.dataProvider}
                  GoodsData={this.state.dataGoods}
                  TabsSumm={this.state.SummTabs}
                  StoreData={this.state.dataStore}
                  {...props} />
              )} />  */}
              <Route render={() => (
                <NotFound />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}



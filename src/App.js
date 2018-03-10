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
<<<<<<< HEAD
import Store from './pages/Store';
import Toolbar from "./components/Toolbar";
import NotFound from "./pages/NotFound";
=======
// import SummTabs from './pages/SummTabs';
import Toolbar from "./components/Toolbar";
import NotFound from "./pages/NotFound";
// import GoodsService from "./GoodsService";
>>>>>>> 6299b9c445f45a5ea02c587f30cc1e7d7c3b05a3
import DataBase from './components/DataBase';

export default class App extends Component {
  data = new DataBase();
  constructor(props) {
    super(props);
    this.state = {
      data: this.data
    }
  }

<<<<<<< HEAD
=======


>>>>>>> 6299b9c445f45a5ea02c587f30cc1e7d7c3b05a3
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
<<<<<<< HEAD
                  data = {this.data}
                  {...props} />
              )} />}
               <Route path={`/Store`} render={props => (
                <Store                  
                 data = {this.data}
=======
                  {...props} />
              )} />}
              {/* <Route path={`/Stock`} render={props => (
                <Stock                  
                  StoreData={this.state.dataStore}
                  onAddStore={this.addStore}

>>>>>>> 6299b9c445f45a5ea02c587f30cc1e7d7c3b05a3
                  {...props} />
              )} />
              {/* <Route path={`/SummTabs`} render={props => (
                <SummTabs
                  ProvidersData={this.state.dataProvider}
                  GoodsData={this.state.dataGoods}
                  TabsSumm={this.state.SummTabs}
                  StoreData={this.state.dataStore}
                  {...props} />
<<<<<<< HEAD
              )} />  */}
=======
              )} /> */}
>>>>>>> 6299b9c445f45a5ea02c587f30cc1e7d7c3b05a3
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



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
// import SummTabs from './pages/SummTabs';
 import Toolbar from "./components/Toolbar";
 import NotFound from "./pages/NotFound";
// import GoodsService from "./GoodsService";
import DataBase from './components/DataBase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
  }
}

  Data = new DataBase();
    
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
              <Route  path={`/Vender`} render={props => (
                <Vender                
                  DataVender={this.venderData}
                  {...props} />
              )} />
               { <Route path={`/Goods`} render={props => (
                <Goods                 
                  {...props} />
              )} /> }
              {/* <Route path={`/Stock`} render={props => (
                <Stock                  
                  StoreData={this.state.dataStore}
                  onAddStore={this.addStore}

                  {...props} />
              )} />
              <Route path={`/SummTabs`} render={props => (
                <SummTabs
                  ProvidersData={this.state.dataProvider}
                  GoodsData={this.state.dataGoods}
                  TabsSumm={this.state.SummTabs}
                  StoreData={this.state.dataStore}
                  {...props} />
              )} /> */} 
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



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
import SummTabs from './pages/SummTabs';
import Writeoff from './pages/Writeoff';
import Totallist from './pages/Totallist';
import Documents from './pages/Documents';

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
                  data = {this.data}
                  {...props} />
              )} /> */}
                 <Route path={`/Doc`} render={props => (
                <Documents
                  data = {this.data}
                  {...props} />
              )} />
              {/* <Route path={`/Writeoff`} render={props => (
                <Writeoff
                  data = {this.data}
                  {...props} />
              )} /> */}
              <Route path={`/Totallist`} render={props => (
                <Totallist
                  data = {this.data}
                  {...props} />
              )} />             
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



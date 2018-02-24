import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Stock from './pages/Stock'
import Provider from './pages/Propvider'
import Goods from './pages/Goods'
import SummTabs from './pages/SummTabs'
import Toolbar from "./components/Toolbar"
import NotFound from "./pages/NotFound"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataGoods: [
        {
          id: 2,
          goods: "Paper",
          providerId: 1,
        }
      ],

      dataProvider: [
        {
          id: 1,
          provider: "ProBox"
        }
      ],

      dataStore:[{
        id:1,
        store:"Store#1",
        capacity:10
      }]
    }
    SummTabs:[{
      id:1,
    }]

  }


  // DeletePrvider = id => {
  //   let findIdProvider = function (elem, index, array) {
  //     return id === id
  //   }
  //   ///////////////////////////////////
  // }

  appendProvider = provider => {//Сохраняет поставщика
    let ArrProvider = {
      id: Date.now(),
      provider: provider
    };
    let dataProvider = [...this.state.dataProvider, ArrProvider];
    this.setState({ dataProvider })
  }

  addGoodsPlusProvider = (goods, providerId) => {
    let ArrGoodsAndProvider = { //сохраняет Товары и id поставщика 
      id: Date.now(),
      goods: goods,
      providerId: providerId,
      
    }
    let dataGoods = [...this.state.dataGoods, ArrGoodsAndProvider];
    this.setState({ dataGoods });
  }
  addStore=(store,capasity)=>{//сохраняет склад
     let ArrStore = {
       id:Date.now(),
       store:store,
       capacity:capasity
     }
     let dataStore=[...this.state.dataStore,ArrStore];
     this.setState({dataStore});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar />
          <div>
            <Switch>
              <Route exact path={`/Provider`} render={props => (
                <Provider
                  ProvidersData={this.state.dataProvider}
                  onAddProvider={this.appendProvider}
                  {...props} />
              )} />
              <Route path={`/Goods`} render={props => (
                <Goods
                  ProvidersData={this.state.dataProvider}
                  GoodsData={this.state.dataGoods}
                  onAddGoodsAndProvider={this.addGoodsPlusProvider}
                  {...props} />
              )} />
              <Route path={`/Stock`} render={props => (
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



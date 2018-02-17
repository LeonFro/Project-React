import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Stock from './pages/Stock'
import Provider from './pages/Provider'
import Goods from './pages/Goods'
import Shipment from './pages/Shipment'
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
          number:0
        }
      ],

      dataProvider: [
        {
          id: 1,
          provider: "ProBox"
        }
      ],

      dataStock: [

      ]
    }

  }


  DeletePrvider = id => {
    let findIdProvider = function (elem, index, array) {
      return id === id
    }
    ///////////////////////////////////
  }

  appendProvider = provider => {
    let ArrProvider = {
      id: Date.now(),
      provider: provider
    };
    let dataProvider = [...this.state.dataProvider, ArrProvider];
    this.setState({ dataProvider })
  }

  addGoodsPlusProvider = (goods, providerId) => {
    let ArrGoodsAndProvider = {
      id: Date.now(),
      goods: goods,
      providerId: providerId,
      number:0
    }
    let dataGoods = [...this.state.dataGoods, ArrGoodsAndProvider];
    this.setState({ dataGoods });
  }
  SaveStore=(goodsId,valueCounter)=>{
    let dataGoods=this.state.dataGoods.map(x=>{
      if(x.id==goodsId){
        x.number=valueCounter;
      }
      return x;
    })
    this.setState({dataGoods});
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
                  ProvidersData={this.state.dataProvider}
                  GoodsData={this.state.dataGoods}
                  StockData={this.state.dataStock}
                  onSaveStore={this.SaveStore}
                  {...props} />
              )} />
              <Route path={`/Shipment`} render={props => (
                <Shipment
                  ProvidersData={this.state.dataProvider}
                  GoodsData={this.state.dataGoods}
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



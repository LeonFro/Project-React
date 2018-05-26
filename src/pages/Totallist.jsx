import React, { Component, Fragment } from 'react';
import { GoodsService } from "../Services/GoodsService";
import { StoreService } from "../Services/StoreService";
import { TotalService } from "../Services/TotalService";

export default class Totallist extends Component {
  goodsService;
  storeService;
  totalService;

  constructor(props) {
    super(props);
    this.goodsService = new GoodsService(props.data);
    this.storeService = new StoreService(props.data);
    this.totalService = new TotalService(props.data);

    this.state = {
      result: {}
    }
  };

  resetlist = (e) => {
    e.preventDefault();
    let result = this.totalService.createNewApp();
    this.setState({ result })
  }

  renderGoods(objRaport) { // Функю для Гудсов
    let goodsDivArray = [];
    for (var key in objRaport) {
      let objGoods = this.goodsService.findGoodById(Number(key));// НАйти объект гудс
      goodsDivArray.push(<table className="tableNoBorder" key={key}><tbody>
        <tr><td >{objGoods.goods}</td></tr>
      </tbody>
      </table>
      )
    }
    return goodsDivArray;
  };

  renderQuantity(objRaport) {
    let quantityDivArray = [];
    for (var key in objRaport) {
      quantityDivArray.push(
        <table className="tableNoBorder" key={key}><tbody>
          <tr><td> {objRaport[key]}</td></tr>
        </tbody>
        </table>
      )
    }
    return quantityDivArray;
  };

  renderStores(totalReport) {                                          
    let storesArray = [];
    for (var key in totalReport) {
      let goodsArray = this.renderGoods(totalReport[key]);            // Вызов функции Гудсов
      let quantityArray = this.renderQuantity(totalReport[key]);
      let objStore = this.storeService.findById(Number(key));          //Найти объект Склад
      storesArray.push(<tr key={key}>
        <td>{objStore.store}</td>
        <td> {goodsArray}</td>
        <td>{quantityArray}</td>
      </tr>);
    }
    return storesArray;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-2">
             <button type="button" className="btn btn-success" onClick={this.resetlist}>ResetList</button> {/* BUTTON */}
          </div>
          <div className="col-md-5">
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Store</th>
              <th>Good</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{this.renderStores(this.state.result)}</tbody>     
        </table>
      </div>
    )
  }
}


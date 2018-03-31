import React, { Component, Fragment } from 'react';
import { GoodsService } from "../Services/GoodsService";
import { StoreService } from "../Services/StoreService";
import { SummService } from "../Services/SummService";
import OptionStore from "../components/OptionStore";
import ResultSearch from "../Tabs/ResultSearch";
import ComboBoxStore from "../components/ComboBoxStore";


export default class SummTabs extends Component {
  goodsService;
  storeService;
  summService;

  constructor(props) {
    super(props);
    this.goodsService = new GoodsService(props.data);
    this.storeService = new StoreService(props.data);
    this.summService = new SummService(props.data);
    this.formSearch = this.formSearch.bind(this);
    this.addSumm = this.addSumm.bind(this);
    this.state = {
      quantity: '',
      title: "Choose store"
    }
  };

  addSumm(summId, nameStore, idGoods, valueReceived) {
    this.summService.addFormInSumm(summId, nameStore, idGoods, valueReceived)
  };

  formSearch(e) {
    e.preventDefault();
    let storeId = this.state.store;
    let valueQuantity = this.state.quantity;
    if (storeId, valueQuantity) {
      let objectStore = this.storeService.findStore(storeId, valueQuantity);
      this.summService.addDataSumm(objectStore);
      this.setState({
        quantity: '',
      })
    }
  };

  hendleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="container-fluid">
            <div className="form-group row">
              <div className="col-xs-3 col-sm-3"> </div>
              <div className="col-xs-8 col-sm-6">
                <div className="form-control-static">
                </div>
                <h3 className="form-control-static cool">Filling of a store</h3>
                <form className="form-inline" onSubmit={this.formSearch}>

                  <select className="form-control" name="store" onChange={this.hendleChange}>
                    <option>{this.state.title}</option>
                    {this.storeService.getAll().map(store =>
                      (<ComboBoxStore
                        StoreData={store}
                        key={store.id}
                        value={store.id}
                      />))}
                  </select>

                  <input type="text" className="form-control" name="quantity" value={this.state.quantity}
                    required placeholder="Quantity" onChange={this.hendleChange} />
                  <button type="submit" className="btn btn-default">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert">#id</div> </div>
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert">Store</div></div>
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert"> Goods </div></div>
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert"> Volume</div></div>
          </div></div>
        <div className="container-fluid">
          <div className="row">

            {this.summService.getAll().map(x =>
              (<ResultSearch
                goodsData={this.goodsService.getAll()}
                summComponent={x}
                key={x.id}
                addFormInDataSumm={this.addSumm}
                resultStore={this.storeService.findById(x.storeId)
                } />
              ))}
              
          </div>
        </div>
      </Fragment>
    );
  }
}
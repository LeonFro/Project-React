import React, { Component, Fragment } from 'react';
import { GoodsService } from "../Services/GoodsService";
import { StoreService } from "../Services/StoreService";
import { SummService } from "../Services/SummService";
import {VenderService } from "../Services/VenderService";
import OptionStore from "../components/OptionStore";
import NewForm from "../Tabs/NewForm";
import ComboBoxStore from "../components/ComboBoxStore";
import ComboBoxGoods from "../components/ComboBoxGoods";

export default class SummTabs extends Component {
  goodsService;
  storeService;
  summService;
  venderService;
  constructor(props) {
    super(props);
    this.goodsService = new GoodsService(props.data);
    this.storeService = new StoreService(props.data);
    this.summService = new SummService(props.data);
    this.venderService = new VenderService(props.data);
    this.addStoreGoodsComp = this.addStoreGoodsComp.bind(this);
    this.addReceived = this.addReceived.bind(this);
    this.state = {
      quantity: '',
      titleStore: "Choose store", 
      titleGoods: "Choose goods"
    }
  };

  addReceived(summId, valueReceived) {
    this.summService.addFormInSumm(summId, valueReceived)
  };

   addStoreGoodsComp(e) {
     e.preventDefault();
     let storeId = this.state.store;
     let goodsId = this.state.goods;
     let valueQuantity = this.state.quantity;
     if(storeId!==undefined&&storeId!=="Choose store"&&goodsId!==undefined&&goodsId!=="Choose goods"){
      let objectStore = this.storeService.findStore(storeId, valueQuantity);
      let objectGoods = this.goodsService.findObjGoods(goodsId);
       this.summService.addDataSumm(objectStore,objectGoods,valueQuantity);
       this.setState({
         quantity: '',
              })
     }
     else{
       alert("Select params")
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
                  <h1>Replenishment of store</h1>
                </div>
                <form className="form-inline" onSubmit={this.addStoreGoodsComp}>

                  <select className="form-control" name="store" onChange={this.hendleChange} >
                    <option>{this.state.titleStore}</option>
                    {this.storeService.getAll().map(store =>
                      (<ComboBoxStore
                        StoreData={store}
                        key={store.id}
                        value={store.id}
                      />))}
                  </select>

                   <select className="form-control" name="goods" onChange={this.hendleChange} >
                    <option>{this.state.titleGoods}</option>
                    {this.goodsService.getAll().map(goods =>
                      (<ComboBoxGoods
                        GoodsData={goods}
                        key={goods.id}
                        value={goods.id}
                      />))}
                  </select> 

                  <input type="number" min="0" max="100" className="form-control" name="quantity" value={this.state.quantity}
                    required placeholder="Quantity goods" onChange={this.hendleChange} />
                  <button type="submit" className="btn btn-default">Add</button>
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
            <div className="col-md-4"></div>
          </div></div>
        <div className="container-fluid">
          <div className="row"> 

             {this.summService.getAll().map(x =>
              (<NewForm            
                summComponent={x}
                key={x.id}                         
                resultGoods={this.goodsService.getAll().find(y=>y.id==x.goodsId)}
                resultStore={this.storeService.findById(x.storeId)}
                addFormInDataSumm={this.addReceived}
                 />
              ))}; 
              
           </div>
        </div> 
      </Fragment>
    );
  }
}

  {/* goodsData={this.goodsService.getAll()}
                venderData={this.venderService.getAll()}
                storeData={this.storeService.getAll()} 
                 */}
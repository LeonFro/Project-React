import React, { Component,Fragment } from 'react';
import { GoodsService } from "../Services/GoodsService";
import { StoreService } from "../Services/StoreService";
import { SummService } from "../Services/SummService";
import NewForm from "../Tabs/NewForm";
export default class Totallist extends Component {
    goodsService;
    storeService;
    summService;
  
    constructor(props) {
      super(props);
      this.goodsService = new GoodsService(props.data);
      this.storeService = new StoreService(props.data);
      this.summService = new SummService(props.data);
      
      this.state = {
       
      }
    };

    render() {
        return (
            <Fragment>
 <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert">#id</div> </div>
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert">Store</div></div>
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert">Remainder</div></div>
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert"> Goods </div></div>
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert"> Volume</div></div>
            <div className="col-md-2"></div>
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
                 </div></div>
                </Fragment>     
        )
    }
}
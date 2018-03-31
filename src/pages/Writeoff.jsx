import React, { Component,Fragment } from 'react';
import { GoodsService } from "../Services/GoodsService";
import { StoreService } from "../Services/StoreService";
import { WriteOffService } from "../Services/WriteOffService";
import ComboBoxGoods from  "../components/ComboBoxGoods";
import ResultSearchGoods from "../Tabs/ResultSearchGoods"
export default class Writeoff extends Component {
  goodsService;
  storeService;
  writeOffService;
  constructor(props) {
    super(props);
    this.writeOffService = new WriteOffService(props.data);
    this.goodsService = new GoodsService(props.data);
    this.storeService = new StoreService(props.data);

    this.state = {
      title: "Choose goods"
    }
  };

  formSearch(e) {
    e.preventDefault();
    let goodsId = this.state.goods;
    let valueQuantity = this.state.quantity;
    if (goodsId, valueQuantity) {
      let objSumm = this.summService.findGoods(goodsId, valueQuantity);
      this.setState({
        objSumm,
        quantity: ''
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
  <div className="col-md-3"></div>
  <div className="col-md-6"><h3 className="form-control-static cool">Write-off of goods</h3> 
                <form className="form-inline" onSubmit={this.formSearch}>
                <div className="container-fluid">
                  <select className="form-control" name="goods" onChange={this.hendleChange}>
                     <option>{this.state.title}</option>
                    {this.goodsService.getAll().map(goods =>
                      (<ComboBoxGoods
                        GoodsData={goods}
                        key={goods.id}
                        value={goods.id}
                      />))} 
                  </select>
                  <input type="text" className="form-control" name="quantity"
                    required placeholder="Quantity" onChange={this.hendleChange} />
                  <button type="submit" className="btn btn-default">Search</button>
                  </div>
                </form></div>
  <div className="col-md-3"></div>
</div>
<div className="container-fluid">
          <div className="row">
            <div className="col-md-2"><div className="alert alert-success alert-dismissible" role="alert">#id</div> </div>
            <div className="col-md-2"><div className="alert alert-success alert-dismissible" role="alert">Goods</div></div>
            <div className="col-md-2"><div className="alert alert-success alert-dismissible" role="alert">Volume</div></div>
            <div className="col-md-2"><div className="alert alert-success alert-dismissible" role="alert">Store</div></div>
            <div className="col-md-4"> </div>
          </div>
          </div>
        <div className="container-fluid">
          <div className="row">
 
              {/* <ResultSearchGoods
                objSumm={this.state.objSumm}
                key={objSumm.id}
                resultStore={this.storeService.findById(this.state.objSumm.storeId)
                }
                resultGoods ={this.goodsService.findById(this.state.objSumm.goods)
                }
                 /> */}
                          
          </div>
        </div>
        </Fragment>       
    )
  }
}
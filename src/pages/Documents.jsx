import React, { Component,Fragment } from 'react';
import { GoodsService } from "../Services/GoodsService";
import { StoreService } from "../Services/StoreService";
import NewForm from "../Tabs/NewForm";
import ComboBoxStore from "../components/ComboBoxStore";
import ComboBoxGoods from "../components/ComboBoxGoods";
import { DocumentService } from "../Services/documentService";

export default class Documents extends Component {
  goodsService;
  storeService;
  documentService;

  constructor(props) {
    super(props);
    this.goodsService = new GoodsService(props.data);
    this.storeService = new StoreService(props.data);
    this.documentService = new DocumentService(props.data);
    this.addDocument=this.addDocument.bind(this);
   
    this.state = { 
      titleStore: "Choose store", 
      titleGoods: "Choose goods",
      action: "Choose action",
      quantity:''
    }
  }

  addDocument(e) { 
    e.preventDefault();
    let storeId = parseInt(this.state.store);
    let goodsId = parseInt(this.state.goods);
    let quantity = parseInt(this.refs.quantity.value); 
    let operation = parseInt(this.state.operation);

    let id = Date.now();
    let newDocument={
      id,
      operation,
      storeId,
      goodsId,
      quantity
    };
    this.documentService.add(newDocument);
    this.setState({
      quantity:'',
           })
  }

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
        <form className="form-inline" onSubmit={this.addDocument}>

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

          <select className="form-control" name="operation" onChange={this.hendleChange} >
            <option>{this.state.action}</option>
            <option value="1">Replenishment</option>
            <option value="-1">WriteOff</option>
          </select>

          <input type="number" min="0" max="100" className="form-control" ref="quantity" defaultValue={this.state.quantity}
            required placeholder="Quantity goods" onChange={this.hendleChange} />
          <button type="submit" className="btn btn-default">Add</button>
        </form>
        </div>
            </div>
          </div>
        </div>

      <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert">#id</div> </div>
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert">Store</div></div> 
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert"> Goods </div></div>
            <div className="col-md-2"><div className="alert alert-warning alert-dismissible" role="alert"> Volume</div></div>
            <div className="col-md-2"></div>
          </div></div>
        <div className="container-fluid">
          <div className="row"> 
             {this.documentService.getAll().map(x =>
              (<NewForm            
                baseDoc={x}
                key={x.id}                         
                resultGoods={this.goodsService.getAll().find(y=>y.id==x.goodsId)}
                resultStore={this.storeService.findById(x.storeId)}                
                 />
              ))}; 
              
           </div>
        </div> 
        </Fragment>
    );
  }
}


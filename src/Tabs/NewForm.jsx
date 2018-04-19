import React, { Component,Fragment} from 'react';
import { DocumentService } from "../Services/documentService";
import SelectGoodsInResult from "./SelectGoodsInResult";
import { GoodsService } from '../Services/GoodsService';

export default class NewForm extends Component {
  goodsService;
  documentService;
  constructor(props) {
    super(props);
    this.goodsService = new GoodsService(props.data);
    this.documentService = new DocumentService(props.data);
    this.state = {
      received:0,
      isEdit: false,   
    }
  }

  hendleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  //  saveChangeValue=e=>{
  //    this.setState({ isEdit: false });
  //    e.preventDefault();    
  //    let summId = this.props.summComponent.id;
  //    let objStore = this.props.resultStore; // не нужен 
  //    let objGoods = this.props.resultGoods; //изменить при появлении новых Goods  
  //    let valueReceived = this.refs.received.value;   
  //      this.props.addFormInDataSumm(summId, valueReceived)
  //      this.setState({
  //      received:valueReceived});
  //  };

   editOn() {
    return (
      <Fragment>
      <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.baseDoc.id}</div></div>
      <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.resultStore.store}</div></div>
      <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.resultGoods.goods}</div></div>
      <div className="col-md-6"><div className="alert alert-info" role="alert">
       <form className="form-inline" onSubmit={this.saveChangeValue}> 
              <input type="number" min="0" max="100"
               className="form-control"
               ref="received" defaultValue={this.props.baseDoc.quantity}onChange={this.hendleChange}/>             
         <button className="btn btn-warning" type="submit" >Save</button> 
         <button className="btn btn-success pull-right" onClick={() =>
            this.setState({ isEdit: false })}>Cancel</button>
       </form>
       </div> </div>
       </Fragment>    
    )
  }
  
  editOff(){
 return(
          <Fragment>    
           <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.baseDoc.id}</div></div>
           <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.resultStore.store}</div></div>       
          <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.resultGoods.goods}</div></div>
          <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.baseDoc.quantity}</div></div> 
          <div className="col-md-4"><button className="btn btn-success pull-right" onClick={() => this.setState({ isEdit: true })}>Change</button>
          <button className="btn btn-danger" disabled="disabled">Delete</button></div> 
          </Fragment>       
 )
  }
  render() {
    return (      
      this.state.isEdit ? this.editOn() : this.editOff()
    );
  }
};


        
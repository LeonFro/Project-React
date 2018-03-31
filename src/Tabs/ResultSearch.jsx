import React, { Component,Fragment} from 'react';
import { SummService } from "../Services/SummService";
import SelectGoodsInResult from "./SelectGoodsInResult";
import { GoodsService } from '../Services/GoodsService';

export default class ResultSeach extends Component {
  goodsService;
  summService;
  constructor(props) {
    super(props);
    this.goodsService = new GoodsService(props.data);
    this.summService = new SummService(props.data);
   
    this.state = {
      received: 0,
      isEdit: false,
      changeGoods:"empty",    
    }
  }

   onSelectGoods=e=>{
      let goodsId = e.target.value;
      this.setState({goodsId})
      e.preventDefault();
   }

  saveGoodsRecived=e=>{
    this.setState({ isEdit: false });
    e.preventDefault();    
    let summId = this.props.summComponent.id;
    let nameStore = this.props.resultStore.store;
    let idGoods = this.state.goodsId;
    let valueReceived = this.refs.received.value;
    if( summId ,nameStore, idGoods, valueReceived){
      this.props.addFormInDataSumm(summId, nameStore, idGoods, valueReceived)
      //Устновть значение гудса в стате
      this.setState({
        changeGoods:"",
        received:valueReceived})
    }
  };

  editOn() {
    return (
      
      <form className="form-inline" onSubmit={this.saveGoodsRecived}> 
      <div className="form-group">      
          <div className="col-md-2">{this.props.summComponent.id}</div>
          <div className="col-md-2">{this.props.resultStore.store}</div>
          <div className="col-md-4">

            <select className="form-control"
            onChange={this.onSelectGoods} value={this.state.value}>
            <option>Change goods</option>
            {this.props.goodsData.map(goods =>
              (<SelectGoodsInResult
                DataGoods={goods}
                key={goods.id}                
                value={goods.id}
              />))}
          </select>

          </div>
          <div className="col-md-4">
            <input type="text"
              className="form-control"
              ref="received" defaultValue={this.state.received}/>
              </div>
          </div>      
        <button className="btn btn-default" type="submit" >Save</button> 
        <button className="btn btn-success pull-right" onClick={() =>
           this.setState({ isEdit: false })}>Cancel</button>
      </form>     
    )
  }
  
  editOff(){
 return(
          <Fragment> 
          <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.summComponent.id}</div></div>
          <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.resultStore.store}</div></div>
          <div className="col-md-2"><div className="alert alert-info" role="alert"> {this.state.changeGoods} </div></div>
          <div className="col-md-2"><div className="alert alert-info" role="alert"> {this.state.received}</div></div>
          <button className="btn btn-success pull-right" onClick={() => this.setState({ isEdit: true })}>Change</button> 
          </Fragment>       
 )
  }
  render() {
    return (      
      this.state.isEdit ? this.editOn() : this.editOff()
    );
  }
};


        
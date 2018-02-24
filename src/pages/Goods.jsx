import React, { Component } from 'react';
import SelectProvider from '../components/SelectProvider';
import ListGoodsAndProvider from "../components/ListGoodsAndProvider";

export default class Goods extends Component {
  constructor(props){
    super(props);
this.state={
  value:props.ProvidersData[0].id,
  goodsPlusProvider:''
}
  }
  
  addGoodsPlusProvider=event=>{
    event.preventDefault();
    let goodsPlusProvider=this.state.goodsPlusProvider;
    let providerId = this.state.value;
    if(goodsPlusProvider){
  this.props.onAddGoodsAndProvider(goodsPlusProvider,providerId);
  this.setState({goodsPlusProvider:""});
    }
  }

  onSelectProvider=event=>{
    let value = event.target.value;
    this.setState({value});
    event.preventDefault();
  }

  thisChange=event=>{
    let goodsPlusProvider=event.target.value;
    this.setState({goodsPlusProvider})
  };

    render() {
      return (
        <div className="row">
           <div className="col-xs-3 col-sm-3"> </div>
            <div className="col-xs-8 col-sm-5">
              <form className="form-inline" onSubmit={this.addGoodsPlusProvider}>
                <div className="form-control-static">
                  <h3 className="form-control-static cool">Goods</h3>
                </div>
                <input type="text" className="form-control" value={this.state.goods} onChange={this.thisChange} placeholder="Add goods"/>                
                <select className="form-control" onChange={this.onSelectProvider} >
                  {this.props.ProvidersData.map(provider=>(
                  <SelectProvider ProvidersData={provider}
                   key={provider.id} 
                   value={provider.id}/>))}
                </select>

                <button type="submit" className="btn btn-default">Add</button>
              </form>

              <ul className="list-group">
              {this.props.GoodsData.map(goodsAndprovider=>
              (<ListGoodsAndProvider 
              resultGoods={goodsAndprovider} 
              key={goodsAndprovider.id}
              resultProvider={this.props.ProvidersData.find(x=>x.id==goodsAndprovider.providerId)}/>))}
              </ul>
            </div>
          
         </div>  
      );
    }
}

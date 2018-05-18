import React, { Component,Fragment } from 'react';
import { GoodsService } from "../Services/GoodsService";
import { StoreService } from "../Services/StoreService";
import { DocumentService} from "../Services/documentService";
import { TotalService} from "../Services/TotalService";
import ListTotal from '../components/ListTotal';

import NewForm from "../Tabs/NewForm";
export default class Totallist extends Component {
    goodsService;
    storeService;
    summService;
    documentService;
    totalService;

    constructor(props) {
      super(props);
      this.goodsService = new GoodsService(props.data);
      this.storeService = new StoreService(props.data);
      this.documentService = new DocumentService(props.data);
      this.totalService = new TotalService(props.data);
      
      this.state = {
       result:{}
      }
    };
         
    resetlist=(e)=>{
      e.preventDefault();
     let result = this.totalService.createNewApp();
      this.setState({result})
    }    
 
renderGoods(storeGoods){
  let goodsDivArray=[];
for(var key in storeGoods){
goodsDivArray.push(<div key={key}>{key}/{storeGoods[key]}</div>)
}
return goodsDivArray;
}

  renderStores(totalReport){
    let storesArray = [];
    for(var key in totalReport){ 
      let goodsArray = this.renderGoods(totalReport[key]);
      storesArray.push(<div key={key}>
       <div>{key}</div>
       <div>{goodsArray}</div>
       </div>);
    }   
    return storesArray;
  }

    render() {
        return (         
 <div className="container">
   <div className ="row">
<div className="col-md-5"></div>
<div className="col-md-2"> <button type="button" className="btn btn-success" onClick={this.resetlist}>ResetList</button></div>
<div className="col-md-5"></div></div>
{
  this.renderStores(this.state.result)
}


 {/* <table className="table table-bordered">
 <thead>
  <tr>
    <th>Store</th>
    <th>Goods</th>
    <th>Total volume</th>
  </tr>
  </thead>
  <tbody>
  {this.state.result 
  
  totalService.getAll().map(x =>
              (<ListTotal            
                baseDoc={x}
                key={x.id}                         
                resultGoods={this.goodsService.getAll().find(y=>y.id==x.goodsId)}
                resultStore={this.storeService.findById(x.storeId)}                
                 />
              ))}
  </tbody>
</table> */}
         </div>
                       
        )
    }
}
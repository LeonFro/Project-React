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
       
      }
    };
         
    resetlist=(e)=>{
      e.preventDefault();
      this.totalService.createRaport();
      this.setState({})
    }    
 
    render() {
        return (         
 <div className="container">
   <div className ="row">
<div className="col-md-5"></div>
<div className="col-md-2"> <button type="button" className="btn btn-success" onClick={this.resetlist}>ResetList</button></div>
<div className="col-md-5"></div></div>
 <table className="table table-bordered">
 <thead>
  <tr>
    <th>Store</th>
    <th>Goods</th>
    <th>Total volume</th>
  </tr>
  </thead>
  <tbody>
  {this.totalService.getAll().map(x =>
              (<ListTotal            
                baseDoc={x}
                key={x.id}                         
                resultGoods={this.goodsService.getAll().find(y=>y.id==x.goodsId)}
                resultStore={this.storeService.findById(x.storeId)}                
                 />
              ))}
  </tbody>
</table>
         </div>
                       
        )
    }
}
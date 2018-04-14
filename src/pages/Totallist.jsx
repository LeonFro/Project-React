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
    
    getffq=()=>{
      this.summService.getNewArr();
    }
     
    getff=()=>{
      this.summService.getFor();
    }    
 

    render() {
        return (
           
 <div className="container">
   <button onClick={this.getff}> Boom</button>
 <table className="table table-hover">
 <thead>
  <tr>
    <th>Store</th>
    <th>Goods</th>
    <th>Total volume</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  </tbody>
</table>
         </div>
                       
        )
    }
}
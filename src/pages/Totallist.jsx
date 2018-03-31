import React, { Component } from 'react';
import { GoodsService } from "../Services/GoodsService";
import { StoreService } from "../Services/StoreService";
import { SummService } from "../Services/SummService";

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
<p>Total</p>
        )
    }
}
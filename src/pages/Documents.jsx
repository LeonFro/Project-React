import React, { Component } from 'react';
import { GoodsService } from "../Services/GoodsService";
import { StoreService } from "../Services/StoreService";
import { SummService } from "../Services/SummService";
import { VenderService } from "../Services/VenderService";
import OptionStore from "../components/OptionStore";
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
        this.state = {
           
        }
    }

    addDocument(e){
        let newDocument =   {
        storeId:1,
        goodsIs:13,
        quontity:-1,       
    }

        this.documentService.add(newDocument)
    }


    render() {
        return (
      
   <div className="col-xs-8 col-sm-6">
                <div className="form-control-static">
                  <h1>Replenishment of store</h1>
                </div>
                <form className="form-inline" onSubmit={this.addStoreGoodsComp}>

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
                    <option value="1">Replenishment</option>
                    <option value="-1">WriteOff</option>
                  </select> 

                  <input type="number" min="0" max="100" className="form-control" name="quantity" value={this.state.quantity}
                    required placeholder="Quantity goods" onChange={this.hendleChange} />
                  <button type="submit" className="btn btn-default">Add</button>
                </form>                             
              </div>
     
     );
    }
}


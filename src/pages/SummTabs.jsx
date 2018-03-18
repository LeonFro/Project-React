import React, { Component,Fragment } from 'react';
import IdTabs from "../components/Tabs/IdTabs";
import ColumGoods from "../components/Tabs/ColumGoods";
import ColumStore from "../components/Tabs/ColumsStore";
import { GoodsService } from "../Services/GoodsService";
import { StoreService } from "../Services/StoreService";
import { VenderService } from "../Services/VenderService";
import { SummService } from "../Services/SummService";
import Totallist from "../components/Totallist";

export default class SummTabs extends Component {
  goodsService;
  venderService;
  storeService;
  summService;
 
  constructor(props) {
    super(props);
    this.goodsService = new GoodsService(props.data);
    this.venderService = new VenderService(props.data);
    this.storeService = new StoreService(props.data);
    this.summService = new SummService(props.data);
    this.addSumm = this.addSumm.bind(this);
    this.state = {
      received: 0,
      writtenOff: 0
    }
  };// Комопонет не заваршен, добавление полей и отрисовка результата.

  addSumm(e) {
    e.preventDefault();
    let goodsId = this.state.goodsValue;
    let storeId = this.state.storeValue;
    let valueReceived = this.state.received;
    let valuewrittenOff = this.state.writtenOff;
    if (goodsId, storeId, valueReceived, valuewrittenOff) {
      this.storeService.addForm(goodsId, storeId, valueReceived, valuewrittenOff);
      this.setState({
        received: "",
        writtenOff: ""
      });
    }
  }

  hendleSelectGoogs = e => {
    let goodsValue = e.target.value;
    this.setState({ goodsValue });
    e.preventDefault();
  };

  hendleSelectStore = e => {
    let storeValue = e.target.value;
    this.setState({ storeValue });
    e.preventDefault();
  }
  addTotalline = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
         <div className="row">
        <div className="container-fluid">
          <h2>SummTabs</h2>
          <form className="form-inline"  onSubmit={this.addTotalline}> 
          <table className="table">
            <thead>
              <tr>
                <th>#id</th>
                <th>Goods/Vender</th>
                <th>Store</th>
                <th>Received</th>
                <th>Written off</th>
                <th></th>
              </tr>
            </thead>
            
            <tbody>
               
                <tr>
                  <td>1</td>
                  <td> <select  onChange={this.hendleSelectGoogs} >  
                    {this.goodsService.getAll().map(goodsAndVender =>
                      (<ColumGoods
                        resultGoods={goodsAndVender}
                        key={goodsAndVender.id}
                        value={goodsAndVender.id}
                        resultVender={this.venderService.getAll().find(x =>
                          x.id == goodsAndVender.venderId)} />))}</select>
                  </td>
                  <td> <select  onChange={this.hendleSelectStore}>
                    {this.storeService.getAll().map(store =>
                      (<ColumStore
                        StoreData={store}
                        key={store.id}
                        store={store.store}
                        capacity={store.capacity}
                        value={store.id}
                      />))}</select>
                  </td>

                  <td><div className="container">
                    <input type="text" className="form-control " name="received" value={this.state.received} />
                  </div>
                  </td>

                  <td><div className="row">
                    <input type="text" className="form-control coll" name="writtenOff" value={this.state.writtenOff} />
                  </div>
                  </td>
                  <td><button className="btn btn-default" type="submit">Save</button>
                  </td>
                </tr>
               
            </tbody>
          </table>
          </form>
          <div className="row">
            <button type="button" className="btn btn-primary btn-sm btn-block">+</button>
          </div>
          <thead>
          <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
              </tr>
            </thead>
          <tbody>
            <tr> 
               {this.summService.getAll().map(x =>
                (<Totallist
                  totalComponents={x}
                  key={x.id}
                  resultVender={this.venderService.getAll().find(x =>
                  x.id == totalComponents.goodsId)}
                  resultGoods={this.goodsService.getAll().find(x =>
                  x.id == totalComponents.goodsId)}
                  resultStore={this.storeService.getAll().find(x =>
                  x.id == totalComponents.storeId)}
                />))}  
             </tr>
          </tbody> 
        </div>
      </div>
     
    );
  }
}
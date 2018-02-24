import React, { Component } from 'react';
import IdTabs from "../components/Tabs/IdTabs"
import ColumGoods from "../components/Tabs/ColumGoods"
import ColumStore from "../components/Tabs/ColumsStore"

export default class Shipment extends Component {
  constructor(props){
    super(props);
this.state={
  received:0,
  writtenOff:0
  }
}
    render() {
      return (
        <div className="row">
        <div className="container-fluid">
         <h2>SummTabs</h2>
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
    {/* {this.props.TabsSumm.map(x=>(<IdTabs 
      TabsSumm={x}
    key={x.id} id={x.id}/>))} */}
   <td> <select >
     {this.props.GoodsData.map(goodsAndprovider=>
      (<ColumGoods 
      resultGoods={goodsAndprovider} 
      key={goodsAndprovider.id}
      resultProvider={this.props.ProvidersData.find
      (x=>x.id==goodsAndprovider.providerId)}/>))}</select></td>

    <td> <select >{this.props.StoreData.map(store=>
      (<ColumStore 
      StoreData={store} 
      key={store.id}
      store={store.store}
      capacity={store.capacity}
        />))}</select></td>
    
    <td><div className="row">
      <input type="text" className="form-control coll"  value={this.state.received}/>
      </div></td>

    <td><div className="row">
      <input type="text" className="form-control coll" value={this.state.writtenOff}/>
      </div></td>
      <td><button class="btn btn-default" type="submit">Save</button> </td>
  </tr>
</tbody>
</table>
<button type="button" class="btn btn-primary btn-sm btn-block">+</button>
        </div>
      </div>
      );
    }
}
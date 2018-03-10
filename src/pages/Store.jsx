import React, { Component } from 'react';
import ListStock from "../components/ListStock";
import{StoreService} from "../Services/StoreService";
import{GoodsService} from "../Services/GoodsService";
export default class Store extends Component {
  goodsService;
  storeService; 
  constructor(props){
    super(props);
    this.goodsService = new GoodsService(props.data);
    this.storeService = new StoreService(props.data);
    this.state={
      capacity:0
     }
  }

addStore=(store,capasity)=>{//сохраняет склад
    let ArrStore = {
      id:Date.now(),
      store:store,
      capacity:capasity
    }
    let dataStore=[...this.state.dataStore,ArrStore];
    this.setState({dataStore});
 }

onSelect=event=>{
let value = event.target.value;
this.setState({value});
event.preventDefault();
}

addStore=event=>{
  event.preventDefault();
  let store=this.state.store;
  let capacity=this.state.capacity;
  if(store){
this.props.onAddStore(store,capacity);
this.setState({store:" "});
  }
}

ChangeStore=event=>{
  let store=event.target.value;
  this.setState({store})
}

ChangeCapacity=event=>{
  let capacity=event.target.value;
  this.setState({capacity})
}

  render() {
    return (
      <div className="row">
      <div className="col-xs-3 col-sm-3"> </div>
            <div className="col-xs-8 col-sm-6">
            <form className="form-inline"  onSubmit={this.addStore}>
              <div className="form-control-static">
                <h3 className="form-control-static cool">Store</h3>
              </div>
              <input type="text" className="form-control"
               placeholder="Name Store"
               value={this.state.store} onChange={this.ChangeStore}/>
               
              <input type="text" 
              className="form-control gon"
               placeholder="Capacity" 
               value={this.state.capacity} onChange={this.ChangeCapacity}/>
              
              <button type="submit" className="btn btn-default">Add Store</button>
            </form>

            {/* <ul className="list-group">
                  {this.props.StoreData.map(y=>
                (<ListStock  StoreData={y} 
                key={y.id} 
                store={y.store}
                capacity={y.capacity}              
                />))}           
            </ul> */}
          </div>
        </div>
      
    );
  }
}

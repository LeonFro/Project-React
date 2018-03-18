import React, { Component } from 'react';
import ListStore from "../components/ListStore";
import { StoreService } from "../Services/StoreService";

export default class Store extends Component {
  storeService;
  constructor(props) {
    super(props);
    
    this.storeService = new StoreService(props.data);
    this.SaveForm = this.SaveForm.bind(this);
    this.deleteStore = this.deleteStore.bind(this);
    this.state = {
      store: "",
      capacity: ""
    }
  };

 SaveForm(newNameStore, newCapacity, StoreId){
   this.storeService.SaveChange(newNameStore, newCapacity, StoreId);
 };

 deleteStore(id){
   this.storeService.deleteStore(id);
   this.setState({})
 };

  addStore = event => {
    event.preventDefault();
    let store = this.state.store;
    if (store == "") {
      alert('The field "Store" must be filled in')
      return;
    }
    let capacity = this.state.capacity;
    if (store, capacity) {
      this.storeService.add(store, capacity);
      this.setState({
        store: "",
        capacity: ""
      });
    }
  };

  ChangeStore = event => {
    let store = event.target.value;
    this.setState({ store })
  };

  ChangeCapacity = event => {
    let capacity = event.target.value;
    if (capacity.match(/[a-zA-Zа-яА-Я\s]/)) {
      alert("Only numbers are allowed!")
      return;
    }
    return this.setState({ capacity })
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-3 col-sm-3"> </div>
        <div className="col-xs-8 col-sm-6">
          <form className="form-inline" onSubmit={this.addStore}>
            <div className="form-control-static">
              <h3 className="form-control-static cool">Store</h3>
            </div>
            <input type="text" className="form-control"
              placeholder="Name Store"
              value={this.state.store} onChange={this.ChangeStore} />

            <input type="number"
              className="form-control gon"
              placeholder="Capacity"
              required="required"
              value={this.state.capacity} onChange={this.ChangeCapacity} />

            <button type="submit" className="btn btn-default">Add Store</button>
          </form>

          <ul className="list-group">
            {this.storeService.getAll().map(y =>
              (<ListStore StoreData={y}
                key={y.id}
                store={y.store}
                capacity={y.capacity}
                FormSave={this.SaveForm}
                delStore={this.deleteStore}
              />))}
          </ul>
        </div>
      </div>

    );
  }
}

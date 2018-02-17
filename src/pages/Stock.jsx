import React, { Component } from 'react';
import ListStock from "../components/ListStock";

export default class Stock extends Component {
  constructor(props){
    super(props);  
    this.state={
     }
  }

onSelect=event=>{
let value = event.target.value;
this.setState({value});
event.preventDefault();
}

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div>
            <form className="form-inline">
              <div className="form-control-static">
                <h3 className="form-control-static cool">Stock</h3>
              </div>
              <input type="text" className="form-control" />
              <button type="submit" className="btn btn-default">Search</button>
            </form>

            <ul className="list-group">
                 {this.props.GoodsData.map(y=>
                (<ListStock  goodsList={y} 
                key={y.id} 
                number={y.number}
                providerList={this.props.ProvidersData.find(x=>x.id==y.providerId)}
                SaveStore={this.props.onSaveStore}
                />))
                
                } 
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import SelectVender from '../components/SelectVender';
import ListGoodsAndVender from "../components/ListGoodsAndVender";
import DataBase from '../components/DataBase';

export default class Goods extends Component {
  constructor(db) {
    super(db);
    this.database = db;
    this.state = {
      value: this.db.dataVender[0].id,
      goodsPlusvender: ''
    }
  }

  db = new DataBase;

  addGoodsPlusVender = (goods, venderId) => {
    this.db.dataGoods.push({
      id: Date.now(),
      goods: goods,
      venderId: venderId,
    });

    // let dataGoods = [...this.state.dataGoods, ArrGoodsAndvender];
    // this.setState({ dataGoods });
  }

  addGoodsPlusVender = event => {
    event.preventDefault();
    let goods = this.state.goodsPlusvender;
    let venderId = this.state.value;
    if (goods) {
      this.addGoodsPlusVender(goods, venderId);
      this.setState({ goodsPlusvender: "" });
    }
  }

  onSelectvender = event => {
    let value = event.target.value;
    this.setState({ value });
    event.preventDefault();
  }

  thisChange = event => {
    let goodsPlusvender = event.target.value;
    this.setState({ goodsPlusvender })
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-3 col-sm-3"> </div>
        <div className="col-xs-8 col-sm-5">
          <form className="form-inline" onSubmit={this.addGoodsPlusvender}>
            <div className="form-control-static">
              <h3 className="form-control-static cool">Goods</h3>
            </div>
            <input type="text" className="form-control" value={this.state.goods}
              onChange={this.thisChange} placeholder="Add goods" />
            <select className="form-control" onChange={this.onSelectvender} >
              {this.db.dataVender.map(x => (
                <SelectVender vendersData={x}
                  key={x.id}
                  value={x.id} />))}
            </select>

            <button type="submit" className="btn btn-default">Add</button>
          </form>

          <ul className="list-group">
            {this.db.dataGoods.map(goodsAndvender =>
              (<ListGoodsAndVender
                resultGoods={goodsAndvender}
                key={goodsAndvender.id}
                resultVender={this.db.dataVender.find(x => x.id == goodsAndvender.venderId)} />))}
          </ul>
        </div>

      </div>
    );
  }
}

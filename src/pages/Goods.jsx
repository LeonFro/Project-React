import React, { Component } from 'react';
import ListGoodsAndVender from "../components/ListGoodsAndVender";
import { GoodsService } from "../Services/GoodsService";
import { VenderService } from "../Services/VenderService";

export default class Goods extends Component {
  goodsService;
  venderService;
  constructor(props) {
    super(props);
    this.goodsService = new GoodsService(props.data)
    this.venderService = new VenderService(props.data);
    this.addGoodsPlusVender = this.addGoodsPlusVender.bind(this)
    this.state = {
      goods: '',
      vender: ''
    }
  }

  addGoodsPlusVender(e) {
        e.preventDefault();
    let newGoods = this.state.goods;
    let newVender = this.state.vender;
    if (newGoods, newVender) {
      this.goodsService.addGoodAndVender(newGoods, newVender);
      this.setState({
        goods: "",
        vender: ""
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3 col-sm-3"> </div>
        <div className="col-xs-8 col-sm-5">
          <div className="container form-inline">
            <h3 className="form-control-static cool">Goods</h3>
          </div>

          <form className="form-inline" onSubmit={this.addGoodsPlusVender}>
            <input type="text" className="form-control" name="goods" value={this.state.goods}
              placeholder="Add good" onChange={this.handleChange} />
            <input type="text" className="form-control" name="vender" value={this.state.vender}
              placeholder="Add vender" onChange={this.handleChange} />
            <button type="submit" className="btn btn-default">Add</button>
          </form>

          <ul className="list-group">
            {this.goodsService.getAll().map(goodsAndvender =>
              (<ListGoodsAndVender
                resultGoods={goodsAndvender}
                key={goodsAndvender.id}
                resultVender={this.venderService.getAll().find(x => x.id == goodsAndvender.venderId)} />))}
          </ul>
        </div>

      </div>
    );
  }
}




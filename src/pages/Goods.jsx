import React, { Component } from 'react';
import ListGoodsAndVender from "../components/ListGoodsAndVender";
import { GoodsService } from "../Services/GoodsService";
import { VenderService } from "../Services/VenderService";
import OptionVender from '../components/OptionVender'

export default class Goods extends Component {
  goodsService;
  venderService;
  constructor(props) {
    super(props);
    this.goodsService = new GoodsService(props.data)
    this.venderService = new VenderService(props.data);
    this.addGoodsPlusVender = this.addGoodsPlusVender.bind(this);
    this.deleteGoods = this.deleteGoods.bind(this);
    this.SaveForm = this.SaveForm.bind(this);
    this.state = {
      goods: '',
      vender: '',
    }
  };

  addGoodsPlusVender(e) {
    e.preventDefault();
    let newGoods = this.state.goods;
    let newVender = this.state.vender;
    let checkVender = this.venderService.findVender(newVender);// результат(obj id: , name: )  или undefined
    if (checkVender !== undefined) {
      this.goodsService.addGoods(newGoods, checkVender);// передаем в метод добавления в базу Гудсов 
      this.setState({
        goods: "",
        vender: ""
      })
    } else {
      if (newGoods, newVender) {
        this.goodsService.addGoodAndVender(newGoods, newVender);
        this.setState({
          goods: "",
          vender: ""
        })
      }
    }
  }

  SaveForm(GoodsId, valueGood, VenderId, valueVender) {
    this.goodsService.SaveGoodsAndValue(GoodsId, valueGood, VenderId, valueVender);
  }

  deleteGoods(id) {
    this.goodsService.deleteGoods(id);
    this.setState({})
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3 col-sm-3"> </div>
        <div className="col-xs-8 col-sm-6">
          <form className="form-inline" onSubmit={this.addGoodsPlusVender}>
            <div className="form-control-static">
              <h3 className="form-control-static cool">Goods</h3>
            </div>
            
            <input type="text" className="form-control" name="goods" value={this.state.goods}
              required placeholder="Add good" onChange={this.handleChange} />
            <input type="text" className="form-control" name="vender" value={this.state.vender}
              required placeholder="Add vender" onChange={this.handleChange} list="venders" />
            <datalist id="venders">

              {this.venderService.getAll().map(x => (<OptionVender
                result={x}
                key={x.id}
              />))}
            </datalist>

            <button type="submit" className="btn btn-default">Add</button>
          </form>

          <ul className="list-group">
            {this.goodsService.getAll().map(goodItem =>
              (<ListGoodsAndVender
                resultGoods={goodItem}
                key={goodItem.id}
                delGoods={this.deleteGoods}
                FormSave={this.SaveForm}
                resultVender={this.goodsService.findById(goodItem.venderId)} />))}
          </ul>
        </div>
      </div>
    );
  }
}




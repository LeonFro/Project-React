import React, { Component } from 'react';

export default class SelectGoodsInResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  //Вопрос с value
  render() {
    const { DataGoods } = this.props;
    return (
        <option value={DataGoods.id} name="goods">{DataGoods.goods}</option>
    );
  }
}
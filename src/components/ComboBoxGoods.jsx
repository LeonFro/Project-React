import React, { Component } from 'react';

export default class ComboBoxGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  
  render() {
    const { GoodsData } = this.props;
    return (
        <option value={GoodsData.id}>{GoodsData.goods}</option>
    );
  }
}
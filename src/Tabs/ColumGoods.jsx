import React, { Component } from 'react';

export default class ColumGoods extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { resultGoods } = this.props;
    const { resultVender } = this.props;
    return (    
        <option value={resultGoods.id}>{resultGoods.goods}/{resultVender.vender}</option>
    );
  }
}


import React, { Component } from 'react';

export default class ComboBoxStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { StoreData } = this.props;
    return (
      <option value={StoreData.id} >{StoreData.store}</option>
    );
  }
}
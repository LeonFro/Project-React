import React, { Component } from 'react';

export default class ColumsStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  //Вопрос с value
  render() {
    const { StoreData } = this.props;
    return (

     
        <option value={StoreData.id}>{StoreData.store}/{StoreData.capacity}</option>
      

    );
  }
}
import React, { Component } from 'react';

export default class ColumGoods extends Component {
  constructor(props){
    super(props);
this.state={
  }
}
    render() {
      return (
    
         <option >{this.props.resultGoods.goods}/{this.props.resultProvider.provider}</option>
  
      );
    }
}

  
import React, { Component } from 'react';

export default class ColumsStore extends Component {
  constructor(props){
    super(props);
this.state={
  }
}
    render() {
      return (
     
         <option >{this.props.StoreData.store}/{this.props.StoreData.capacity}</option>
  
      );
    }
}
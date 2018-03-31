import React, { Component } from 'react';

export default class OptionVender extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { result } = this.props; 
    return (     
        <option >{result.vender}</option>     
    );
  }
}
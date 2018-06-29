import React, { Component } from 'react';

export default class OptionStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    const { result } = this.props; 
    return (     
        <option >{result.store}</option>     
    );
  }
}
import React, { Component } from 'react';

export default class SelectProvider extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {ProvidersData} = this.props
    return(
        <option value={ProvidersData.id}>{ProvidersData.provider}</option>
    )
}
}
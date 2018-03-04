import React, { Component } from 'react';

export default class SelectVender extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {vendersData} = this.props
    return(
        <option value={vendersData.id}>{vendersData.vender}</option>
    )
}
}
import React, { Component } from 'react';


export default class ListTotal extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <tr>
                <td>{this.props.resultStore.store}</td>
                <td>{this.props.resultGoods.goods}</td>
                <td>{this.props.baseDoc.quantity}</td>
            </tr>
        )
    }
};
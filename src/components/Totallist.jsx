import React, { Component, Fragment } from 'react';

function Totallist(props) {
    return (
        <Fragment>
            <td>{props.totalComponents.id}</td>
            <td>{props.resultGoods.goods}/{props.resultVender.vender}</td>
            <td>{props.resultStore.store}</td>
            <td>Received:{props.totalComponents.valueReceived}</td>
            <td>writtenOff:{props.totalComponents.valuewrittenOff}</td>
            <td></td>
        </Fragment>
    )
}
export default Totallist;
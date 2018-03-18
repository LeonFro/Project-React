import React, { Component } from 'react';

function ListVender(props) {
    return (
        <li className="list-group-item list-group-item-warning">
            <form className="form-inline" onSubmit={(e) => {
                e.preventDefault(); return false;
            }}>
                <u className="get">Vender:</u>
                <p className="text-primary get">{props.venderData.vender}</p>
                <button className="btn btn-success pull-right go"
                    onClick={() => { props.deleteProvider(props.venderData.id) }}>Delete</button>
            </form>
        </li>
    )
}
export default ListVender;

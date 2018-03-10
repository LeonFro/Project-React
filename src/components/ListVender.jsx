import React, { Component } from 'react';

function ListVender(props) {   
        return (
            <li className="list-group-item list-group-item-warning">
                <form className="form-inline" onSubmit={(e) => {
                    e.preventDefault(); 
                    return false;
                }}>
                    <div className="container-fluid">
                        Vender:{props.venderData.vender}
                        <button className="btn btn-success pull-right go"
                            onClick={() => {props.deleteProvider(props.venderData.id) }}>Delete</button>
                    </div>
                </form>
            </li>
        )
    }
export default ListVender;

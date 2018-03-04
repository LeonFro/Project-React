import React, { Component } from 'react';

export default class ListVender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <li className="list-group-item list-group-item-warning">
                <form className="form-inline" onSubmit={(e) => {
                    e.preventDefault();
                    return false;
                }
                }>
                    <div className="container-fluid">
                        Vender:{this.props.venderData.vender}
                        <button className="btn btn-success pull-right go"
                            onClick={() => { this.props.deleteProvider(this.props.venderData.id) }}>Delete</button>
                    </div>
                </form>
            </li>
        )
    }
}

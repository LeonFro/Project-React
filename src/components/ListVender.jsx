import React, { Component } from 'react';

<<<<<<< HEAD
function ListVender(props) {   
=======
export default class ListVender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
>>>>>>> 6299b9c445f45a5ea02c587f30cc1e7d7c3b05a3
        return (
            <li className="list-group-item list-group-item-warning">
                <form className="form-inline" onSubmit={(e) => {
                    e.preventDefault(); 
                    return false;
                }}>
                    <div className="container-fluid">
                        Vender:{props.venderData.vender}
                        <button className="btn btn-success pull-right go"
<<<<<<< HEAD
                            onClick={() => {props.deleteProvider(props.venderData.id) }}>Delete</button>
=======
                            onClick={() => { this.props.deleteProvider(this.props.venderData.id) }}>Delete</button>
>>>>>>> 6299b9c445f45a5ea02c587f30cc1e7d7c3b05a3
                    </div>
                </form>
            </li>
        )
    }
export default ListVender;

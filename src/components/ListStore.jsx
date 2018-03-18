import React, { Component } from 'react';


export default class ListStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        }
    }
    saveForm = e => {
        this.setState({ isEdit: false });
        let newNameStore = this.refs.store.value;
        let newCapacity = this.refs.capacity.value;
        let StoreId = this.props.StoreData.id;
        this.props.FormSave(newNameStore, newCapacity, StoreId);
    }

    editOn() {
        return (<li className="list-group-item list-group-item-warning">
            <form className="form-inline" onSubmit={(e) => {
                e.preventDefault();
                return false;
            }}>
                <input type="text" className="form-control" ref="store" defaultValue={this.props.StoreData.store} />
                <input type="text" className="form-control" ref="capacity" defaultValue={this.props.StoreData.capacity} />
            </form>
            <button className="btn btn-danger pull-right" onClick={this.saveForm}>Save</button>
            <button className="btn btn-success pull-right" onClick={() => this.setState({ isEdit: false })}>Cancel</button>
        </li>)
    };

    editOff() {
       return( <li className="list-group-item list-group-item-warning">
            <form className="form-inline" onSubmit={this.SaveEventStore}>
                <div className="container-fluid">
                    <p>Store: {this.props.StoreData.store}</p>
                    <p>capacity: {this.props.StoreData.capacity}</p>
                    <div className="form-group">
                    </div>
                </div>
                <button className="btn btn-success pull-right" onClick={() => {
                    this.props.delStore(this.props.StoreData.id)
                }}
                >Delete</button>
                <button className="btn btn-warning pull-right" onClick={() =>
                    this.setState({ isEdit: true })}
                >Edit</button>
            </form>
        </li>)
    };

    render() {
        return this.state.isEdit ? this.editOn() : this.editOff();
    }
}
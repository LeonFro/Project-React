import React, { Component } from "react";

export default class ListGoodsAndVender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        }
    }

    saveForm = e => {
        this.setState({ isEdit: false });
        let valueGood = this.refs.goods.value;
        let valueVender = this.refs.vender.value;
        let GoodsId = this.props.resultGoods.id;
        let VenderId = this.props.resultVender.id;
        this.props.FormSave(GoodsId, valueGood, VenderId, valueVender);
    }
    editOn() {                // Режим редактирования
        return (<li className="list-group-item list-group-item-warning">
            <form className="form-inline" onSubmit={(e) => {
                e.preventDefault();
                return false;
            }}>
                <input type="text" className="form-control" ref="goods" defaultValue={this.props.resultGoods.goods} />
                <input type="text" className="form-control" ref="vender" defaultValue={this.props.resultVender.vender} />
            </form>
            <button className="btn btn-danger pull-right" onClick={this.saveForm}>Save</button>
            <button className="btn btn-success pull-right" onClick={() => this.setState({ isEdit: false })}>Cancel</button>
        </li>)
    }

    editOff() {            // Режим по умолчанию (Простая форма)
        return (<li className="list-group-item list-group-item-warning">
            <form className="form-inline" onSubmit={(e) => {
                e.preventDefault();
                return false;
            }}>
                <div className="container-fluid">
                    <p>Goods:{this.props.resultGoods.goods}</p>
                    <p>Vender:{this.props.resultVender.vender}</p>
                </div>
                <button className="btn btn-success pull-right" onClick={() => {
                    this.props.delGoods(this.props.resultGoods.id)
                }}
                >Delete</button>
                <button className="btn btn-warning pull-right" onClick={() =>
                    this.setState({ isEdit: true })}
                >Edit</button>
            </form>
        </li>)
    }

    render() {
        return this.state.isEdit ? this.editOn() : this.editOff();   // Активировать режим редактирования
    };
}
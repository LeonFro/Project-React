import React, { Component, Fragment } from 'react';

export default class ResultSeachGoods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtraction: 0,
      isEdit: false,
    }
  }

  hendleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveChangeValue = e => {
    this.setState({ isEdit: false });
    e.preventDefault();
    let summId = this.props.summComponent.id;
    let valueSub = this.refs.subtraction.value;
    this.props.minusVolumeSumm(summId, valueSub);
    this.setState({
      subtraction: valueSub
    });
  };

  editOn() {
    return (
      <Fragment>
        <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.summComponent.id}</div></div>
        <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.resultGoods.goods}</div></div>
        <div className="col-md-2"><div className="alert alert-info" role="alert"> {this.props.resultStore.store}</div></div>
        <div className="col-md-4"><div className="alert alert-info" role="alert">
          <form className="form-inline" onSubmit={this.saveChangeValue}>
            <input type="number" min="0" max="100"
              className="form-control"
              ref="subtraction" defaultValue={this.props.summComponent.volumeOfGoods} onChange={this.hendleChange} />
            <button className="btn btn-warning" type="submit" >Save</button>
            <button className="btn btn-success pull-right" onClick={() =>
              this.setState({ isEdit: false })}>Cancel</button>
          </form>
        </div></div>
        <div className="col-md-2"></div>
      </Fragment>
    )
  }

  editOff() {
    return (
      <Fragment>

        <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.summComponent.id}</div></div>
        <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.resultGoods.goods}</div></div>       
        <div className="col-md-2"><div className="alert alert-info" role="alert"> {this.props.resultStore.store}</div></div>
        <div className="col-md-2"><div className="alert alert-info" role="alert"> {this.props.summComponent.volumeOfGoods} </div></div>
        <div className="col-md-4"> <button className="btn btn-success" onClick={() => this.setState({ isEdit: true })}>Change</button></div>

      </Fragment>
    )
  }
  render() {
    return (
      this.state.isEdit ? this.editOn() : this.editOff()
    );
  }
};
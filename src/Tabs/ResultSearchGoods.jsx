import React, { Component,Fragment} from 'react';



export default class ResultSeachGoods extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isEdit: false,      
    }
  }


  editOn() {
    return (
      
      <form className="form-inline" onSubmit={this.saveGoodsRecived}> 
      <div className="form-group">      
          <div className="col-md-2">{this.props.summComponent.id}</div>
          <div className="col-md-2">{this.props.resultStore.store}</div>
          <div className="col-md-4">

            {/* <select className="form-control"
            onChange={this.onSelectGoods} value={this.state.value}>
            <option>Change goods</option>
            {this.props.goodsData.map(goods =>
              (<SelectGoodsInResult
                DataGoods={goods}
                key={goods.id}                
                value={goods.id}
              />))}
          </select> */}

          </div>
          <div className="col-md-4">
            <input type="text"
              className="form-control"
              ref="received" defaultValue={this.state.received}/>
              </div>
          </div>      
        <button className="btn btn-default" type="submit" >Save</button> 
        <button className="btn btn-success pull-right" onClick={() =>
           this.setState({ isEdit: false })}>Cancel</button>
      </form>     
    )
  }
  
  editOff(){
 return(
          <Fragment> 
          <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.objSumm.id}</div></div>
          <div className="col-md-2"><div className="alert alert-info" role="alert">{this.props.resultGoods}</div></div>
          <div className="col-md-2"><div className="alert alert-info" role="alert"> {this.props.objSumm.volumeOfGoods} </div></div>
          <div className="col-md-2"><div className="alert alert-info" role="alert"> {this.props.resultStore}</div></div>
          <button className="btn btn-success pull-right" onClick={() => this.setState({ isEdit: true })}>Change</button> 
          </Fragment>       
 )
  }
  render() {
    return (      
      this.state.isEdit ? this.editOn() : this.editOff()
    );
  }
};
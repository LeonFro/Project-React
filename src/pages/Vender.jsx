import React, { Component } from 'react';
import ListVender from "../components/ListVender";
import { VenderService } from "../Services/VenderService";

export default class Vender extends Component {
  venderService;

  constructor(props) {
    super(props)
    this.venderService = new VenderService(props.data);
    this.state = {
      vender: ''
    };
    
    this.deleteVender = this.deleteVender.bind(this);
  }

  addVender = event => {
    event.preventDefault();
    let vender = this.state.vender;
    if (vender) {
      this.venderService.add(vender);
      this.setState({ vender: "" });
    }
  }

  thisChange = event => {
    let vender = event.target.value;
    this.setState({ vender })
  };

  deleteVender(id) {
    this.venderService.deleteVender(id);
    this.setState({});
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3 col-sm-3"> </div>
        <div className="col-xs-8 col-sm-5">

          <form className="form-inline" onSubmit={this.addVender} >
            <div className="form-control-static">
              <h3 className="form-control-static cool">Vender</h3>
            </div>
            <input type="text" className="form-control" placeholder="Add vender"
              value={this.state.vender} onChange={this.thisChange} />
            <button type="submit" className="btn btn-default" >Add</button>
          </form>

          <ul className="list-group">
            {this.venderService.getAll().map(vender =>
              (<ListVender
                key={vender.id}
                venderData={vender}
                deleteProvider={this.deleteVender}
              />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

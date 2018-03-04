import React, { Component } from 'react';
import ListVender from "../components/ListVender"
import DataBase from '../components/DataBase';

export default class Vender extends Component {
  database;
  constructor(db) {
    super(db)
    this.database = db;
    this.state = {
      vender: ''
    }
  }

  db = new DataBase();

  onAddvender = vender => {
    //   this.DataBase.push(vender);
    //   var venderService = new Vender(); 
this.db.dataVender.push({
      id: Date.now(),
      vender: vender
    });
    // this.DataBase.push(vender)
     let db = [...this.db];
     this.setState({ db })
  }

  addVender = event => {
    event.preventDefault();
    let vender = this.state.vender;
    if (vender) {
      this.onAddvender(vender);
      this.setState({ vender: " " });
    }
  }

  thisChange = event => {
    let vender = event.target.value;
    this.setState({ vender })
  };


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
            {this.db.dataVender.map(vender =>
              (<ListVender

                key={vender.id}
                venderData={vender}
              />
              ))}
          </ul>
        </div>
      </div>

    )
  }
}

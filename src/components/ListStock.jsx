import React, { Component } from 'react';


export default class ListStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
// indexCounter=event=>{
//     let valueCounter = event.target.value;
//     this.setState({valueCounter});
//     event.preventDefault();
// }

SaveEventStore=event=>{
    event.preventDefault();
let goodsId = this.props.goodsList.id;
let valueCounter = this.state.valueCounter;
if(goodsId){
    this.props.SaveStore(goodsId,valueCounter)
}
}


    render() {      
        return (           
            <li className="list-group-item list-group-item-warning">
                <form className="form-inline" onSubmit={this.SaveEventStore}>
                    <div className="container-fluid">
                        <p>Stopre: {this.props.StoreData.store}</p>
                        <p>capacity: {this.props.StoreData.capacity}</p>
                              <div className="form-group">                                                                                                         
                            <button className="btn btn-warning pull-right"
                            onClick={() => { this.props.deleteProvider(this.state.id)}}>Delete</button>
                             <button className="btn btn-success pull-right">Save</button>
                            </div>
                    </div>
                </form>
            </li>
        )
    }
}
import React, {Component} from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
           number:props.Datagoods.number,
        }
    }
onMin=event=>{
    let min = event.target.value;
    this.setState({ number:this.state.number - 1 })
    event.preventDefault();
}

onPlus=event=>{
    let plus = event.target.value;
    this.setState({ number:this.state.number + 1 })
    event.preventDefault();
}


render(){
    return(
        <div>
            <button className="btn btn-default" onClick={this.onMin}>-</button>
              <input type="text" 
              className="form" 
              onChange={this.props.onChange}
              value={this.state.number}/>
            <button className="btn btn-default" onClick={this.onPlus}>+</button>
        </div>
    )
}
}

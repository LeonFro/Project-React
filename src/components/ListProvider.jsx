import React, {Component} from 'react';

export default class ListProvider extends Component{
constructor(props){
    super(props);
    this.state={
        provider:props.ProvidersData.provider,
        id:props.ProvidersData.id
    }
}

render(){
    return(
      <li className="list-group-item list-group-item-warning">
                <form className="form-inline" onSubmit={(e)=>
                    {
                        e.preventDefault();
                        return false;
                    }
                    }>
                <div className="container-fluid">
                    {this.props.ProvidersData.provider}
                    <button className="btn btn-success pull-right" 
                    onClick={()=>{this.props.deleteProvider(this.state.id)}}>Delete</button>
                </div>
                </form>
            </li>
    )
    }}
   
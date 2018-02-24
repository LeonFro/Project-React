import React,{Component} from 'react';
import ListProvider from "../components/ListProvider"

export default class Provider extends Component{
  constructor(props){
    super(props)
    this.state={
      provider:""
    }
    
  }

addProvider=event=>{
  event.preventDefault();
  let provider=this.state.provider;
  if(provider){
this.props.onAddProvider(provider);
this.setState({provider:""});
  }
}

thisChange=event=>{
  let provider=event.target.value;
  this.setState({provider})
};

  render(){
return(
  <div className="row">
    <div className="col-md-6 col-md-offset-3">
      <div>
        
        <form className="form-inline" onSubmit={this.addProvider} >
          <div className="form-control-static">
            <h3 className="form-control-static cool">Provider</h3>
          </div>
          <input type="text" className="form-control" placeholder="Add provider" 
          value={this.state.provider} onChange={this.thisChange}/>
          <button type="submit" className="btn btn-default" >Add</button>
        </form>

        <ul className="list-group">
        {this.props.ProvidersData.map(provider=>
        (<ListProvider
        key={provider.id}
        ProvidersData={provider}
        deleteProvider={this.props.DeleProvider}
        />
        ))}
        </ul>
      </div>
    </div>
  </div>
)}
}

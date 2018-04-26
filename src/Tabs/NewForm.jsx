import React, { Component,Fragment} from 'react';

 export default class NewForm extends Component {
   constructor(props) {
     super(props);
 
   }
   render(){
     let classForm = this.props.baseDoc.quantity>0?"alert alert-info":"alert alert-success"
  return(
           <Fragment> 
           <div className="col-md-2"></div>   
            <div className="col-md-2"><div className={classForm} role="alert">{this.props.baseDoc.id}</div></div>
            <div className="col-md-2"><div className={classForm} role="alert">{this.props.resultStore.store}</div></div>       
           <div className="col-md-2"><div className={classForm} role="alert">{this.props.resultGoods.goods}</div></div>
           <div className="col-md-2"><div className={classForm} role="alert">{this.props.baseDoc.quantity}</div></div> 
           <div className="col-md-2"></div> 
           </Fragment>       
  )
   }
 };
        
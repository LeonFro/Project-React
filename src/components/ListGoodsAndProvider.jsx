import React, { Component }  from "react";

export default class ListGoodsAndProvider extends Component{
    constructor(props){
        super(props);}

render(){
    return(
        <li className="list-group-item list-group-item-warning">
        <div className="form-group">
            <p>Goods:{this.props.resultGoods.goods}</p> 
            <p>Provider:{this.props.resultProvider.provider}</p>
        </div>
       </li>
   )} ;
}
import React, { Component }  from "react";

export default class ListGoodsAndVender extends Component{
    constructor(props){
        super(props);
    }

render(){
    return(
        <li className="list-group-item list-group-item-warning">
        <div className="form-group">
            <p>Goods:{this.props.resultGoods.goods}</p> 
            <p>Vender:{this.props.resultVender.vender}</p>
        </div>
       </li>
   )} ;
}
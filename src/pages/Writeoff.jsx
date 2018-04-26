// import React, { Component,Fragment } from 'react';
// import { GoodsService } from "../Services/GoodsService";
// import { StoreService } from "../Services/StoreService";
// import { WriteOffService } from "../Services/WriteOffService";
// import ComboBoxGoods from  "../components/ComboBoxGoods";
// import ResultSearchGoods from "../Tabs/ResultSearchGoods";
// import { SummService } from "../Services/SummService";
// export default class Writeoff extends Component {
//   goodsService;
//   storeService;
//   writeOffService;
//   summService;
//   constructor(props) {
//     super(props);
//     this.writeOffService = new WriteOffService(props.data);
//     this.goodsService = new GoodsService(props.data);
//     this.storeService = new StoreService(props.data);
//      this.summService = new SummService(props.data);
//      this. formSearch = this.formSearch.bind(this);
//      this.subtraction = this.subtraction.bind(this);
//     this.state = {
//       todos:this.summService.getAll(),
//       titleGoods: "Choose goods"
//     }
//   };

//   subtraction(summId, valueSub){
//         this.summService.subtractionInSumm(summId, valueSub);
//   };

//   formSearch(e){
//     e.preventDefault();//Удалить, после проверки на использование 
//     let goodsId = this.state.goods;
//     let todos =this.summService.getAll().filter(x =>x.goodsId==goodsId);
//       this.setState({todos})
//    };

//   hendleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//       <Fragment>
//       <div className="row">
//   <div className="col-md-3"></div>
//   <div className="col-md-6"><h3 className="form-control-static cool">Write-off of goods</h3> 
//                  <form className="form-inline" onSubmit={this.formSearch}>
//                 <div className="container-fluid">
//                 <select className="form-control" name="goods" onChange={this.hendleChange} >
//                     <option>{this.state.titleGoods}</option>
//                     {this.goodsService.getAll().map(goods =>
//                       (<ComboBoxGoods
//                         GoodsData={goods}
//                         key={goods.id}
//                         value={goods.id}
//                       />))}
//                   </select>                 
//                   <button type="submit" className="btn btn-default">Search</button>
//                   </div>
//                 </form></div>
//   <div className="col-md-3"></div>
// </div>
// <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-2"><div className="alert alert-success alert-dismissible" role="alert">#id</div> </div>
//             <div className="col-md-2"><div className="alert alert-success alert-dismissible" role="alert">Goods</div></div>
//             <div className="col-md-2"><div className="alert alert-success alert-dismissible" role="alert">Store</div></div>
//             <div className="col-md-2"><div className="alert alert-success alert-dismissible" role="alert">Volume</div></div>
//             <div className="col-md-4"> </div>
//           </div>
//           </div>
//         <div className="container-fluid">
//           <div className="row">

//            {this.state.todos.map(x =>
//               <ResultSearchGoods           
//                 summComponent={x}
//                 key={x.id}                         
//                 resultGoods={this.goodsService.getAll().find(y=>y.id==x.goodsId)}
//                 resultStore={this.storeService.findById(x.storeId)}
//                 minusVolumeSumm = {this.subtraction}
//                 />
//               )},                          
//           </div>
//         </div>
//         </Fragment>       
//     )
//   }
// }
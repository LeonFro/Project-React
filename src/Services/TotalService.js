import { GoodsService } from "./GoodsService";
import { StoreService } from "./StoreService";
import { DocumentService } from "./documentService"

export class TotalService {
    database;
    goodsService;
    storeService;
    documentService;
    constructor(db) {
        this.database = db;
        this.goodsService = new GoodsService(db);
        this.storeService = new StoreService(db);
        this.documentService = new DocumentService(db);
    };

    createNewApp() {
        this.database.dataDocuments.sort(function (a, b) { return a.storeId - b.storeId });
        let temporaryData = this.database.dataDocuments.slice();
        for (var i = 0; i < temporaryData.length; i++) {
            for (var j = i + 1; j < temporaryData.length;) {
                if (temporaryData[i].storeId == temporaryData[j].storeId && temporaryData[i].goodsId == temporaryData[j].goodsId) {
                    //  this.letSumm(temporaryData[i].id,temporaryData[i].storeId,temporaryData[i].goodsId);
                    temporaryData.splice(j, 1);
                } else { j++ }
            }
            this.database.dataTotal = temporaryData;
            console.log(temporaryData);
            return temporaryData;

        }

    };


    //  letSumm(id,storeId,goodsId){//сумму по позиции
    //  let sum = 0; debugger
    //  let dataFilter = this.database.dataDocuments.slice();
    //  let filterArr = dataFilter.filter(x=>x.storeId==storeId);
    //  let filterGoods = filterArr.filter(y=>y.goodsId==goodsId);
    //  for (var i = 0; i < filterGoods.length; i++) {
    //     sum+=filterGoods[i].quantity;
    //  }
    //  let obj = {
    //      id,
    //      storeId,
    //      goodsId,
    //      sum
    //  }
    //  this.database.dataTotal.push({
    //      id:obj.id,
    //      storeId:obj.storeId,
    //      goodsId:obj.goodsId,
    //      quantity:obj.sum
    //  });
    //  return obj;
    // };

    getAll() {
        return this.database.dataTotal;
    };
};



// for(let i =0;i<this.database.dataDocuments.length;i++){debugger
//     let g = this.database.dataDocuments[i].storeId;
//      let gg = this.database.dataDocuments.filter(x=>x.storeId==g);
//      console.log(gg)
//     }

// var obj=[];debugger
//        nextInput:
//        for(var i=0; i<this.database.dataDocuments.length;i++){
//            var str = this.database.dataDocuments[i].storeId;
//            for (var j=0; j<obj.length; j++){
//                if (obj[j]==str)continue nextInput;
//            }
//            obj.push({str});
//        }
//        return obj;

// for(var i =0; i<temporaryData.length;i++){
//     for(var j=i+1; j<temporaryData.length;){
//       if(temporaryData[i].storeId==temporaryData[j].storeId&&temporaryData[i].goodsId==temporaryData[j].goodsId){ 
//           sum=this.letSumm(temporaryData[j].storeId,temporaryData[j].goodsId,temporaryData);
//          temporaryData[i].quantity=sum;
//          temporaryData.splice(j,1)      
//       }else{j++}
//     }
//     console.log(temporaryData)
//     return temporaryData;
// }

// var i = temporaryData.length -1;
// for (;i>=0;i--){
//     if(temporaryData[i].storeId&&temporaryData[i].goodsId in obj)continue;          
//     data.push(temporaryData[i]);           
//     obj[temporaryData[i].storeId&&temporaryData[i].goodsId]= 1;
// }
// console.log(data);
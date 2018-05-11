import { GoodsService } from "./GoodsService";
import { StoreService } from "./StoreService";


export class DocumentService {
    database;
    goodsService;
    storeService;
   

    constructor(db) {
        this.database = db;
        this.goodsService = new GoodsService(db);
        this.storeService = new StoreService(db);
       
    }

    add(doc) {
        let store = this.storeService.findById(doc.storeId); // объект 
        let good = this.goodsService.findGoodById(doc.goodsId);// объект 
        let operation = doc.operation;debugger
        let quantity = doc.quantity;
        if (store == null) {
            alert(`No store with id [${doc.storeId}]`);
            return false;
        };

        if (good == null) {
            alert(`No good with id [${doc.goodsId}]`);
            return false;
        };

        if (operation == null) {
            alert(`No choose operation`);
            return false;
        };

        if (doc.operation > 0) {  //Пополнение ++++
            let sumValue = doc.quantity + this.numberOfGoodsInStore(store.id)
            if (store.capacity >= sumValue) {
                this.database.dataDocuments.push({
                    id: doc.id,
                    storeId: doc.storeId,
                    goodsId: doc.goodsId,
                    quantity: doc.quantity
                });
                return true;
            } else {
                alert("Store volume is exceeded!")
                return false;
            };
        }

        else if (doc.operation < 0) {//Списание ----
            let cell = this.diductionOfStore(store.id, good.id, quantity);
            if (cell >= 0) {
                this.database.dataDocuments.push({
                    id: doc.id,
                    storeId: doc.storeId,
                    goodsId: doc.goodsId,
                    quantity: -doc.quantity
                });
            }else{               
                return false;
            }
        };
    }

    numberOfGoodsInStore(storeId) {// Cумма всех товаров на данном складе
        let sum = 0;
        for (var i = 0; i < this.database.dataDocuments.length; i++) {
            if (storeId == this.database.dataDocuments[i].storeId) {
                sum = sum + this.database.dataDocuments[i].quantity
            }
        }
        return sum;
    };

    diductionOfStore(storeId, goodId, quantity) {//провeрка при списаниi
        let remainder = 0;debugger;
        let result;
        let temporaryData = this.createNewApp();
        for (var i = 0; i < this.database.dataDocuments.length; i++) {
            if (storeId == this.database.dataDocuments[i].storeId && goodId == this.database.dataDocuments[i].goodsId) {              
                result = temporaryData[this.database.dataDocuments[i].storeId][this.database.dataDocuments[i].goodsId] - quantity
                if (0 <= result) {
                    return result;
                }
                else {
                    alert("There is not so much goods in the store!");
                    return -1;
                }
            }
             else if(0 > result){
                 alert("The list does not contain similar products or warehouses!");
                 return -1;
             }
            
        }
    };

    createNewApp() {
        let totalReport = {};
        for(var i in this.database.dataDocuments){
            let document = this.database.dataDocuments[i];
            if(totalReport[document.storeId]){
                if(totalReport[document.storeId][document.goodsId]){
                    totalReport[document.storeId][document.goodsId] += document.quantity;
                }else{
                    totalReport[document.storeId][document.goodsId] = document.quantity;
                }
            }else{
                totalReport[document.storeId]= {};
                totalReport[document.storeId][document.goodsId] = document.quantity;
            }
        }
        return totalReport;
        };

    getAll() {
        return this.database.dataDocuments;
    };

}
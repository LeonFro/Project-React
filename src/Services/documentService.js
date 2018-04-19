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
        let store = this.storeService.findById(doc.storeId);debugger// объект 
        let good = this.goodsService.findGoodById(doc.goodsId);// объект 
        let operation = doc.operation;
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

        if(doc.operation>0){
            let sumValue = +doc.quantity+ +this.numberOfGoodsInStore(store.id)
           if(store.capacity>=sumValue){
            this.database.dataDocuments.push({
                id:doc.id,
                storeId:doc.storeId,
                goodsId:doc.goodsId,
                quantity:sumValue
            });
            return true;
           }        
        }else if(doc.operation<0){
         let remainder = this.numberOfGoodsInStore(store.id)-doc.quantity
         if(remainder>0){
            this.database.dataDocuments.push({
                id:doc.id,
                storeId:doc.storeId,
                goodsId:doc.goodsId,
                quantity:remainder
            });
         }
        };
  
        // если докмент - это поступление
        // понять есть ли на складе место?*
        // если нет, сообщитьоб ошибке
        // если есть, создать документ

        // если документ - списание
        // понять, есть ли на складе столько этого товара
        // если нет, сообщить об ошибке
        // если есть, создать докккумент
  
    }
    
    numberOfGoodsInStore(storeId) {
        let sum = 0;debugger
        for (var i = 0; i < this.database.dataDocuments.length; i++) {
            if (storeId == this.database.dataDocuments[i].storeId) {
                sum = sum + this.database.dataDocuments[i].quantity
            }
        }
        return sum;
    };
 

    getAll() {
        return this.database.dataDocuments;
    };

}
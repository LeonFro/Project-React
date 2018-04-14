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
        let store = this.storeService.findById(doc.storeId);
        let good = this.goodsService.findGoodById(doc.goodsId);
        if (store == null){
            alert(`No store with id [${doc.storeId}]`);
            return false;
        }

        if (good == null){
            alert(`No good with id [${doc.goodsId}]`);
            return false;
        }

        // если докмент - это поступление
        // понять есть ли на складе место?
        // если нет, сообщитьоб ошибке
        // если есть, создать документ

        // если документ - списание
        // понять, есть ли на складе столько этого товара
        // если нет, сообщить об ошибке
        // если есть, создать докккумент


        this.database.dataDocuments.push(doc);

        return true;
    }

    numberOfGoodsInStore(storeId){
        let sum = 0;
        for(var i=0;i<this.database.dataDocuments.length; i++){
            if(storeId==this.database.dataDocuments[i].storeId){
                sum = sum + this.database.dataDocuments[i].quontity
            }
        }
        return sum;
    }


}
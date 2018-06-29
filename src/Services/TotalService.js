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
        let totalReport = {};
        for (var i in this.database.dataDocuments) {
            let document = this.database.dataDocuments[i];
            if (totalReport[document.storeId]) {
                if (totalReport[document.storeId][document.goodsId]) {
                    totalReport[document.storeId][document.goodsId] += document.quantity;
                } else {
                    totalReport[document.storeId][document.goodsId] = document.quantity;
                }
            } else {
                totalReport[document.storeId] = {};
                totalReport[document.storeId][document.goodsId] = document.quantity;
            }
        }
        return totalReport;
    };

    createRaport() {
        let sumQuantity = this.createNewApp(); debugger;
        let temporaryData = JSON.parse(JSON.stringify(this.database.dataDocuments));// клонировать массив       
        for (var i = 0; i < temporaryData.length; i++) {
            for (var j = i + 1; j < temporaryData.length;) {
                if (temporaryData[i].storeId == temporaryData[j].storeId && temporaryData[i].goodsId == temporaryData[j].goodsId) {
                    temporaryData[i].quantity = sumQuantity[temporaryData[i].storeId][temporaryData[i].goodsId];
                    temporaryData.splice(j, 1);
                } else { j++ }
            }
        }
        this.database.dataTotal = temporaryData;
        return temporaryData;
    };

<<<<<<< HEAD


    getAll() {
        debugger;
=======
    
    getAll() {debugger;
>>>>>>> fc541ec8a5cfcc40bcd3f0280738b1a653fb22c0
        return this.database.dataTotal;
    };
};


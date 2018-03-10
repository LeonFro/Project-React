export class GoodsService {
    database;
    constructor(db) {
        this.database = db;        
    }

    addGoodAndVender(newGood,newVender) {
        let newId = Date.now();
        this.database.dataGoods.push({
            id: newId,
            goods:newGood,
            venderId:newId
        });
        this.database.dataVender.push({
            id:newId,
            vender:newVender
        })
    }

    getAll() {
        return this.database.dataGoods;
    }
 
} 
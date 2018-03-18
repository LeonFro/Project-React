export class SummService {
    database;
    constructor(db) {
        this.database = db;
        
    }
    
    addForm(goodsId, storeId, valueReceived, valuewrittenOff) {
        let newId = Date.now();
        this.database.SummTabs.push({
            id: newId,
             goodsId,
             storeId,
             valueReceived,
             valuewrittenOff
        });
    }

    getAll() {
        return this.database.SummTabs;
    }
  
};
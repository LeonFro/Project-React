export class StoreService {
    database;
    constructor(db) {
        this.database = db;        
    }

    
    getAll() {
        return this.database.dataStore;
    }
 
} 
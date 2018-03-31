export class WriteOffService {
    database;
    constructor(db) {
        this.database = db;
      
    }

    addResultSearch(objSumm){
        
    }

    getAll() {
        return this.database.dataWriteOff;
    };
}
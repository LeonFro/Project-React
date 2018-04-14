export class WriteOffService {
    database;
    constructor(db) {
        this.database = db;
      
    }

       getAll() {
        return this.database.dataWriteOff;
    };
}//УДАЛИТЬ НЕ ИСПОЛЬЗУЕТСЯ
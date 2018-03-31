export class TotalService {
    database;
    constructor(db) {
        this.database = db;
    }

    getAll() {
        return this.database.dataTotal;
    }
}
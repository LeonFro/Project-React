export class SummService {
    database;
    constructor(db) {
        this.database = db;
    }

    addDataSumm(objectStore) {
        let storeId = objectStore.id;
        let newId = Date.now();
        this.database.dataSumm.push({
            id: newId,
            storeId,
            goodId: "",
            volumeOfGoods: 0
        });
    }

    addFormInSumm(summId, nameStore, idGoods, valueReceived) {
        this.database.dataSumm.map(x => {
            if (x.id == summId) {
                x.goodId = idGoods; 
                x.volumeOfGoods = valueReceived;
            }
            return x;
        })
    }

    getAll() {
        return this.database.dataSumm;
    }

    findGoods(goodsId,valueQuantity){
        let objSumm = this.database.dataSumm.find(x =>
                 x.id == goodsId);
         let result = objSumm.volumeOfGoods;
         if (valueQuantity <= result) {
             return  objSumm; {debugger}
         }
         else {
              alert("Тhe volume of the requested product is exceeded")// Дописать резальтат !         
         }
        };
    
        findById(storeId) {
            return this.database.dataStore.find(x =>
                x.id == storeId);
        };

};
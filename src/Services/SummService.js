export class SummService {
    database;
    constructor(db) {
        this.database = db;
    }
    
    addDataSumm(objectStore,objectGoods,valueQuantity){
        if(objectStore!==undefined&&objectGoods!==undefined&&valueQuantity!==0){ 
            let storeId = objectStore.id; 
            let goodsId = objectGoods.id;
            let remainder = objectStore.capacity-valueQuantity; //определить остаток"
            let newId = Date.now();
            this.database.dataSumm.push({
                id: newId,
                storeId,
                goodsId,
                volumeOfGoods:valueQuantity,
                remainder:remainder
            })};
    }


    addFormInSumm(summId,valueReceived){

        this.database.dataSumm.map(x => {// находим нужный объект со значениями по id
            if (x.id == summId) {
                                  /// добавить проверку по capacity

                    let received =+x.volumeOfGoods+ +valueReceived;debugger
                    let remainder = x.remainder-valueReceived
                    if(received,remainder){
                    x.remainder = remainder;                  
                    x.volumeOfGoods = received;                  
                    return x;
                } 
                else{
                    alert("!!!")
                }                            
            }
           
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
             return  objSumm;
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
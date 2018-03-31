export class StoreService {
    database;
    constructor(db) {
        this.database = db;        
    }


    add(store,capacity) {
        this.database.dataStore.push({
            id: Date.now(),
            store: store,
            capacity:capacity
        })
    };

deleteStore(id){ //В случае использования Склада в др. компанентах, необходимо прописать вывод сообщения!!!
let indexStore = this.database.dataStore.findIndex(x=>{
    return x.id == id
})
this.database.dataStore.splice(indexStore,1)
};

    getAll() {
        return this.database.dataStore;
    };

SaveChange(newNameStore, newCapacity, StoreId){
let resetDataStore = this.database.dataStore.map(x=>{
    if(x.id==StoreId){
        x.store = newNameStore;
        x.capacity = newCapacity;
    }
    return x;
})
};

findStore(storeId,valueQuantity){
    let objectStore = this.database.dataStore.find(x =>
             x.id == storeId);
     let result = objectStore.capacity-objectStore.quantity;
     if (valueQuantity <= result) {        
         return  objectStore
     }
     else {
          alert("No volume needed in the store")// Дописать резальтат !         
     }
    };

    findById(storeId) {
        return this.database.dataStore.find(x =>
            x.id == storeId);
    };

} 
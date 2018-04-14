export class SummService {
    database;
    constructor(db) {
        this.database = db;
    }
    
    addDataSumm(objectStore,objectGoods,valueQuantity){
        if(objectStore!==undefined&&objectGoods!==undefined&&valueQuantity!==0){
              let objSumm = this.database.dataSumm.find(x => {
                 return  x.storeId == objectStore.id});// ищим объект Сторе 
             let catchStoreObj = this.database.dataStore.find(x=>{
                 return x.id ==objectStore.id})
             if(objSumm==undefined){// если подобного Склада нет созадем запись
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
            })}
            else if(catchStoreObj.id==objectStore.id){//В случае если есть Склад 
                this.database.dataStore.map(x => { // находим нужный Сторе со значениями по id
                    if (x.id ==catchStoreObj.id) {
                            let received =+x.valueGoods+ +valueQuantity;//Складываем полученный объем с Объемом склада
                            if(x.capacity>=received){ // Проверяем чтобы вместимость не привышена
                            x.valueGoods = received;  //Если Да, то записываем сумму в объем                                 
                            return x;}}});
                  let findSummObj= this.database.dataSumm.find(x=>{//Ищим объект Товара в базе Сумм
                   return x.goodsId==objectGoods.id;
                    }); 
                                          
                    if(findSummObj!==undefined&&objectGoods.id==findSummObj.goodsId){ // Если подобный объект есть и равен Товару 
                       let valuePlusRemainder=+findSummObj.volumeOfGoods+ +valueQuantity;// складываем Объем Товара с Заданным объемом
                       this.database.dataStore.map(x => { // находим нужный Сторе со значениями по id
                        if (x.id ==catchStoreObj.id) {
                                let received =+x.valueGoods+ +valuePlusRemainder;// Складываем полученный объем с Объемом склада
                                if(x.capacity>=received){ // Проверяем чтобы вместимость не привышена
                                x.valueGoods = received;  // Если Да, то записываем сумму в объем                                 
                                return x;} 
                                let newId = Date.now();// Формируем новую запись в базе 
                                this.database.dataSumm.push({
                                    id:newId,
                                    storeId:catchStoreObj.id,
                                    goodsId:objectGoods.id,
                                    volumeOfGoods:valueQuantity,
                                    remainder:valuePlusRemainder // добавлем Сумму остаток
                                })}
                            else{alert("Not")}});// ДОПИСАТЬ ПРОВЕРКУ
                            {debugger}}  
                else{
                    let newId = Date.now();
                    this.database.dataSumm.push({
                        id:newId,
                        storeId:catchStoreObj.id,
                        goodsId:objectGoods.id,
                        volumeOfGoods:valueQuantity,
                        remainder:valueQuantity
                    });
                }
            }

        }          
    }

    subtractionInSumm(summId, valueSub){//ВЫчитание из Summ
        this.database.dataSumm.map(x => {// находим нужный объект со значениями по id
            if (x.id == summId) {
                                  /// добавить проверку по capacity
                    let deduction =x.volumeOfGoods-valueSub;
                    let remainder = x.remainder-valueSub;
                    if(deduction,remainder){
                    x.remainder = remainder;                  
                    x.volumeOfGoods = deduction;                  
                    return x;
                } 
                else{
                    alert("!!!")
                }                            
            }
        })
    };

    addFormInSumm(summId,valueReceived){

        this.database.dataSumm.map(x => {// находим нужный объект со значениями по id
            if (x.id == summId) {
                                  /// добавить проверку по capacity
                    let received =+x.volumeOfGoods+ +valueReceived;
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


    // getNewArr=()=>{    
    //     let grouped = this.database.dataSumm.reduce((obj,item)=>{
    //       obj[item.storeId]=obj[item.storeId]|| [];
    //       obj[item.storeId].push(item.goodsId);
    //       return console.log(obj);
    //      },{});
    //       let groups = Object.keys(grouped).map(key=>{
    //         return {storeId:key, goodsId:grouped[key]};
    //       });
    //    };

    getFor=()=>{debugger
        let gg =[];
         let f=0;
        for(var i=0; i<this.database.dataStore.length;i++){
            f=(this.database.dataStore[i].id)
   const fu=(f)=>{    
       console.log(f)
   }
        }
        gg.push(this.database.dataSumm.find(x=>x.storeId==f))
        return gg;
        // 

        // for(var i=0; i<this.database.dataStore.length;i++ ){
        //     return dd.push(this.database.dataStore[i].id)
        // }
        // f=(query)=>{
        //     return this.database.dataSumm.find((x)=>
        // x.)
        // }
       
   }

    //    getFor=()=>{  СУММИРОВАНИЕ резуьтата
    //        let summ=0;
    //     for(var i=0; i<this.database.dataSumm.length;i++){
    //         summ=+summ+ +this.database.dataSumm[i].volumeOfGoods;
    //         alert(summ);
    //     }
    //   }
 



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
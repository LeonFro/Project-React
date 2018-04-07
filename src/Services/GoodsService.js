export class GoodsService {
    database;
    constructor(db) {
        this.database = db;
        
    }

    addGoodAndVender(newGood, newVender) {
        let newId = Date.now();
        this.database.dataGoods.push({
            id: newId,
            goods: newGood,
            venderId: newId
        });
       {
        this.database.dataVender.push({
            id: newId,
            vender: newVender
        })
    }        
    }

    addGoods(newGood,checkVender){// получаем (строка),(obj) , Метод добавления в базу Гудсов 
        let idVender = checkVender.id; // присваиваем  idвендору
        let idGoods=Date.now();
        this.database.dataGoods.push({
            id:idGoods,
            goods:newGood,
            venderId:idVender
        })
    }

    deleteGoods(id) {
        let indexGoods = this.database.dataGoods.findIndex(x => {
            return x.id == id
        })
        this.database.dataVender.splice(indexGoods, 1);
        this.database.dataGoods.splice(indexGoods, 1);
    }

    getAll() {
        return this.database.dataGoods;
    }

    SaveGoodsAndValue(GoodsId, valueGood, VenderId, valueVender) {
        let resetDataGoods = this.database.dataGoods.map(x => {
            if (x.id == GoodsId) {
                x.goods = valueGood;
            }
            return x;
        }
        )
        let resetDataVender = this.database.dataVender.map(y => {
            if (y.id == VenderId) {
                y.vender = valueVender;
            }
            return y;
        })
    }

    findById(venderId) {
        return this.database.dataVender.find(x =>
            x.id == venderId)
    };
    
    findObjGoods(idGoods) {       
           return this.database.dataGoods.find(x => 
             x.id == idGoods);                 
         };

         findByIdGoods(goodsId){
            return this.database.dataGoods.find(x =>
                x.id == goodsId)
        };
} 
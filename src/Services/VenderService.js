export class VenderService {
    database;
    constructor(db) {
        this.database = db;
        this.deleteVender = this.deleteVender.bind(this);
    }
    
    add(vender) {
        this.database.dataVender.push({
            id: Date.now(),
            vender: vender
        });
    };

    getAll() {
        return this.database.dataVender;
    };

    deleteVender(id) {
        let indexVender = this.database.dataVender.findIndex(x => {
            return x.id == id
        })
        let indexGoods = this.database.dataGoods.findIndex(y=>{
            return y.venderId == id
        })

        if(indexGoods>-1){
            alert("The Vender is used in the list!")
        }else{ this.database.dataVender.splice(indexVender, 1);
        }
       
    };

    findVender(newVender){
        return this.database.dataVender.find(x =>
            x.vender == newVender)
    };
} 

export class VenderService {
    database;
    constructor(db) {
        this.database = db;
     this.deleteVender=this.deleteVender.bind(this);
    }
    add(vender){
        
     this.database.dataVender.push({
        id: Date.now(),
        vender: vender
      });
    }

    getAll(){
       return this.database.dataVender;
    }

    deleteVender(id){  debugger;      
       let index = this.database.dataVender.findIndex(x=>{
            return x.id ==id
        })
         this.database.dataVender.splice(index, 1 ); 
           
      }

} 

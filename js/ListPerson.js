


export function ListPerson(){
    this.mangDS = [];
    this.themDS = function(p){
        this.mangDS.push(p);
    }
    this.timIndex = function(ma) {
        var indexFind = -1;
        this.mangDS.map(function(p,index){
            if(p.id == ma){
                indexFind = index;
            }
        });
        return indexFind;
    };
    this.xoaPerson = function(ma) {
        var index = this.timIndex(ma);
        if(index > -1){
            this.mangDS.splice(index,1);
        }
    }
}
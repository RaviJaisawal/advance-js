function name(id){
    return {
        id :  id,
        toString :  function(){ return "name" + this.id}
    }
}

function print(id){
        var that  =  name(id);
        that.test =  function(id){
            return that.id ===  id;
        }

        return that;
}

let obj = print(10);

console.log(obj.test(10));
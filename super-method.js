function name(id, secret){
    secret  =  secret || {}
    secret.id =  id
    return {
        toString :  function(){ return "name " + secret.id}
    }
}

function print(id){
    var secret = {}
    var that  =  name(id,secret);
    super_toString =  that.toString
    that.test =  function(id){
        return id ===  secret.id;
    }

    that.toString  = function(){
        return super_toString.apply(that,[])
    }
    return that;
}

let obj = print(10);

console.log(obj.test(10));
console.log(obj.toString());
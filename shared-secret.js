function name(id, secret){
    secret  =  secret || {}
    secret.id =  id
    return {
        toString :  function(){ return "name" + secret.id}
    }
}

function print(id){
    var secret = {}
    var that  =  name(id,secret);
    that.test =  function(id){
        return id ===  secret.id;
    }

    return that;
}

let obj = print(10);

console.log(obj.test(10));
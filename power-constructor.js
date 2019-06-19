
function Company(){
    this.name = "Google"    
}

var oldObject =  new Company();

function powerConstructor(){
    var that =  Object(oldObject), privateVariable;

    function privateMethod(x){
        privateVariable  =  x;
        return privateVariable;
    }

    that.firstmethod =  function(a,b){
        return a + b + privateVariable;
    }

    that.secondMethod =  function(a){
        return privateMethod(a);
    }

    return that;

}
var obj = powerConstructor();
console.log(obj.name);
console.log(obj.secondMethod(10));
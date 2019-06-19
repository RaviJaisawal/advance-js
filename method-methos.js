Function.prototype.method =  function(name, func){
    this.prototype[name] =  func;
    return this;
}

Constructor.
    method('first_method', function(a,b){ console.log("a b")});
    method('second_method', function(a){console.log("b")});
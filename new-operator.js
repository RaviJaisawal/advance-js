function Constructor(initializer){
    this.member = initializer;
    return this;
}

Constructor.prototype.firstMethod = function(){
    console.log("First")
}

Constructor.prototype.secondMethod = function(){
    console.log("Second")
}

var obj  = new Constructor("india");

obj.firstMethod();

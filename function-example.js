function Gizmo(id){
    this.id =  id;
    return this;
}

Gizmo.prototype.toString =  function(){
    return "gizmo " + this.id;
}

function Hoozit(id){
    this.id =  id;
    return this;
}

Hoozit.prototype =  new Gizmo();
Hoozit.prototype.test =  function(id){
    return this.id ===  id;
}
var oldObject = {
    firstMethod: function(){
        console.log("First")
    },
    secondMethod: function(){
        console.log("Two")
    }
}

var obj  = new Object(oldObject);
obj.thirdMethod = function(){
    console.log("Third")
}

var newObj = new Object(obj);

newObj.firstMethod()
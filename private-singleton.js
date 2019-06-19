    var singleton = function(){
        var privateVariable =  10;
        function priateFunction(a){
         return privateVariable;   
        }

        return {
            first : function(a,b){console.log("a, b")},
            second : function(a){
                return priateFunction(a)
            }
        }
    }();

    console.log(singleton)
    console.log(singleton.second(10))
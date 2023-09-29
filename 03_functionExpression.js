

console.log("====== Function expression======");
console.log("****** With No return type ********");
var show = function(){ //Anonimous Functon

    console.log(`Inside Function Expression...`);

}

show();

 

var add = function(value1, value2){

    console.log(value1+value2);

}

add(20, 10);

 
console.log("******** Function Expression With Return type"); 
var square=function(value1){
        return value1*value1
        
    }
    var result=square(5)
    var result2=square(10)
    console.log(`The square of 25 is ${result}`);
    console.log(`The square of 10 is ${result2}`);
    console.log(typeof(square));


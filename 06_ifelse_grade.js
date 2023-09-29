
console.log("********** Assignment **********");
console.log("========== if else statement ==========");

var voteEligible=function(age){
    if(age==0||age<0||age>=130){
        console.log(` ${age} is Invalid data`);
}else{
        if(age<18){
            console.log(`Your age is ${age} So you are not eligible for vote `);
            
        
        }else{
            
            console.log(`Your age is ${age} So you are  eligible for vote `);
        }
    }
}
voteEligible(-5)
console.log("--------------------------------------");
voteEligible(0)
console.log("--------------------------------------");
voteEligible(142)
console.log("--------------------------------------");
voteEligible(18)
console.log("--------------------------------------");
voteEligible(17)
console.log("--------------------------------------");
voteEligible(90)
console.log("--------------------------------------");
voteEligible(10)
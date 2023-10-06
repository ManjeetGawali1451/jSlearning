

console.log("******** Assignment *********");
console.log("======== Male Marraige Eligibility =========");
console.log("========= Step 1 =========");
function maleMarriageEligibility(gender,age,boyName) {
        var result=gender=='Male' && age>=21
        ?`Hey ${boyName} You are Eligible for marriage`
        :`Sorry, ${boyName} You are not eligible for marriage `
        return result
        
    
}
 var male1=maleMarriageEligibility("Male",25,"Billgates")
 var male2=maleMarriageEligibility("Male",17,"Stew Jobs")
 console.log(male1);
 console.log(male2);
console.log("=========== Step 2 ===========");
function femaleMarraigeEligibility(gender,age,girlName) {
    var result=gender=='Female'&& age<=18
    ?`Sorry ${girlName} You are not eligible for marraige `
    :`Hey ${girlName} You are eligible for marriage`
    return result;
}
var female = femaleMarraigeEligibility("Female",16,"Jenifer")
var female2 = femaleMarraigeEligibility("Female",27,"Malinda Gates");
console.log(female);
console.log(female2);
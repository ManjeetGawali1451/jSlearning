

console.log("******** Assignment *********");
console.log("======== Male Marraige Eligibility =========");
console.log("========= Step 1 =========");
function maleMarriageEligibility(gender,age,boyName) {
        var result=gender=='Male' && age>=21
        ?`Hey ${boyName} You are Eligible for marriage`
        :`Sorry, ${boyName} You are not eligible for marriage `
        return result
        
    
}
var male = maleMarriageEligibility("Male",25,"Billgates")
var male2 = maleMarriageEligibility("Male",17,"Stew Jobs")
console.log(male);
console.log(male2);
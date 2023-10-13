
console.log("---- Assignment ------");
console.log("----- Step1 ------");
console.log("---- Bank details with litrals ----");
let bankSbi={
       accountName:"Abhijeet Patil",
       accounNUmber:"50190020068915",
       branch:"Kothrud,Pune",
       IFSC:"SBIN00025"             
}
console.log("1-->Bank sbi object literals");
console.log(bankSbi);

let bankLocation={
              street:"Main Road",
              city:"Pune",
              Pin:"411018"
}
console.log("=============================================");
console.log("2--> Object Bank Location Created");
console.log(bankLocation);
console.log("=============================================");
console.log("***** Clone the object  Bank sbi and Bank Location *****");
Object.assign(bankSbi,bankLocation)
console.table(bankSbi)
console.log("=============================================");
console.log("Step 4");
let rateOfInterest={
            homeLoanInterest:"8.1%",
            personalLoanInterest:"12.2%",
            duelInterest:"7%"        
}
console.log(rateOfInterest);
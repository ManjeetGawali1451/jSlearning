
console.log("--------- Assignment --------");
console.log("Bank Sbi literals:");

 let bankSbi = {
          Name:"Mahesh Mishra",
          BankName:"State Bank Of India",
          AccNo:556677788990,
          Ifsccode:'566778899'
 };
 let bankLocation ={
             street:"SV road",
             city:"Mumbai",
             pin:400003

 };
 let rateOfInterest={
               homeLoanInterset:"7.5%",
               personalLoanInterset:"8.2%",
               duelInterest:"5.5%"

 } 
 console.table(bankSbi);
 console.log("bank location literals");
console.table(bankLocation);
 console.log("Bank sbi object cloned to bank details");
 const bankDetails1 = Object.assign({},bankSbi );
 console.table(bankDetails1);
 console.log("Bank Location object cloned with bank deatils");
 const bankDetails2=Object.assign({},bankLocation)
 console.table(bankDetails2);
 console.log("Rate of Interest Literals:");
 console.table(rateOfInterest);
 console.log("Merged step1 , step2 and step4 with Sbi Details Object");
const SbiDetails=Object.assign(bankSbi,bankLocation,rateOfInterest)
console.table(SbiDetails);
console.log("Transversing of  merged object");
for (const key in SbiDetails) {
                    console.log(  key     , SbiDetails[key]);                                                     
 }


 

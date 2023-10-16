console.log("----- Assignment -----");

class Bank{
     bankName;
     location;
     accountNo;
     ifsc;
     interestRate;

     constructor(bankName,location,accountNo,ifsc,interestRate){
       this.bankName=bankName;
       this.location=location;
       this.accountNo=accountNo;
       this.ifsc=ifsc;
       this.interestRate=interestRate;
     }
}
  const axisBank= new Bank("Axis Bank","Pune","864546789899","Ax567892")
  const sbiBank=  new Bank("SBI Bank","Mumbai","1900998877666","SBI9823232")
  const iciciBank= new Bank("ICICI Bank", "Delhi", "9156778989098", "IC98245632");
  const hdfcBank = new Bank("HDFC Bank", "Bangalore", "9156778989098", "IC98245632");
  const punjabiBank = new Bank("Punjabi Bank", "Surat", "9156778989098", "IC98245632");
   
  const bank=new Set()
  bank.add(bank);
  bank.add(bank);
  bank.add(bank);
  bank.add(bank);
  bank.add(bank);
  
   
    for (const keys of bank) {
           console.log( `Bank Name --> ${axisBank.bankName}  location --> ${axisBank.location}`);
           console.log( `Bank Name --> ${sbiBank.bankName}  location --> ${sbiBank.location}`);                          
           console.log( `Bank Name --> ${iciciBank.bankName}  location --> ${iciciBank.location}`);
           console.log( `Bank Name --> ${hdfcBank.bankName}  location --> ${hdfcBank.location}`);
           console.log( `Bank Name --> ${punjabiBank.bankName}  location --> ${punjabiBank.location}`);
    }
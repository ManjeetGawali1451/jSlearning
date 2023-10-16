console.log("----- Assignment -------");

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
};
  const axisBank= new Bank("Axis Bank","Pune","86454678","Ax567892","11%");
  const sbiBank=  new Bank("SBI Bank","Mumbai","1900994","SBI9823232","10%");
  const iciciBank= new Bank("ICICI Bank", "Delhi", "9156778", "IC98245632","13%");
  const hdfcBank = new Bank("HDFC Bank", "Bangalore", "91569098", "IC98245632","7%");
  const punjabiBank = new Bank("Punjabi Bank", "Surat", "91567789", "IC98245632","12%");

  const map=new Map()
  map.set("86454678",axisBank);
  map.set("1900994", sbiBank);
  map.set("9156778", iciciBank);
  map.set("91569098", hdfcBank);
  map.set("91567789", punjabiBank);

  const totalKeys=map.keys()
  for (const key of totalKeys) {
          const bank=map.get(key)
          console.log(
                       `    Bank Name --- >    ${bank.bankName} 
                       Account Number --> ${bank.accountNo} 
                       Interest Rate -->  ${bank.interestRate}
                       `);          
  }
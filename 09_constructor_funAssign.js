
console.log("----------- Assignment ----------");
console.log("----------  Step 1 and 2 ---------");
function Bank(bankName,location,ifscCode,branchCode){
      this.bankName=bankName;
      this.location=location;
      this.ifscCode=ifscCode;
      this.branchCode=branchCode;
}
const yesBank= new Bank("yesBank","Maharashtra", " YesBo1666 ", "Pune")
const sbiBank = new Bank("sbiBank", "Karnataka", " SBIN0021733 ",   "Bangalore");
const mahBank = new Bank("mahBank", "Mumbai",    " MSCI0082016 ",   "Borewali");
const axisBank = new Bank("axisBank", "Assam",    " UTIB0001190 ",   "Guwahati");
console.log(`Bank Deatils: ${yesBank.bankName} ${yesBank.location} ${yesBank.ifscCode} ${yesBank.branchCode} `);
console.log(`Bank Deatils: ${sbiBank.bankName} ${sbiBank.location} ${sbiBank.ifscCode} ${sbiBank.branchCode}`); 
console.log(`Bank Deatils: ${mahBank.bankName} ${mahBank.location} ${mahBank.ifscCode} ${mahBank.branchCode}`);
console.log(`Bank Deatils: ${axisBank.bankName} ${axisBank.location} ${axisBank.ifscCode} ${axisBank.branchCode}`);
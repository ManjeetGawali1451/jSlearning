
console.log("----------- Assignment ----------");
console.log("----------  Step 1 and 2 ---------");
function Bank(bankName,location,ifscCode,branchCode){
      this.bankName=bankName;
      this.location=location;
      this.ifscCode=ifscCode;
      this.branchCode=branchCode;
}
const yesBank= new Bank("yesBank","Maharashtra", " YesBo1666 ", " 415556 ")
const sbiBank = new Bank("sbiBank", "Karnataka", " SBIN0021733 ", " 516667 ");
const mahBank = new Bank("mahBank", "Mumbai",    " MSCI0082016 ",   " 618898 ");
const axisBank = new Bank("axisBank", "Assam",    " UTIB0001190 ",   " 419923");
console.log(`Bank Deatils: ${yesBank.bankName} ${yesBank.location} ${yesBank.ifscCode} ${yesBank.branchCode} `);
console.log(`Bank Deatils: ${sbiBank.bankName} ${sbiBank.location} ${sbiBank.ifscCode} ${sbiBank.branchCode}`); 
console.log(`Bank Deatils: ${mahBank.bankName} ${mahBank.location} ${mahBank.ifscCode} ${mahBank.branchCode}`);
console.log(`Bank Deatils: ${axisBank.bankName} ${axisBank.location} ${axisBank.ifscCode} ${axisBank.branchCode}`);
console.log("=======================================================================================");
Bank.prototype.opentime="9 AM"
Bank.prototype.closetime="6 PM"
console.log(`The opening time of sbi bank is ${sbiBank.opentime} and the closing time of Sbi bank is ${sbiBank.closetime}`);
console.log(`The bank name is ${axisBank.bankName} and the closing time  is ${axisBank.closetime}`);
console.log(`The bank name is ${yesBank.bankName} the branch Code is ${axisBank.branchCode} and the closing time  is  ${axisBank.closetime}`);

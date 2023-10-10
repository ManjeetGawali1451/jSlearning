
console.log("------ Assignment-------");
class vehicleDetails {
    companyname;
    carcolor;
    carmodel;
    engineCapacity;
    transmissionsystem;

    constructor(companyname, carcolor, carmodel, engineCapacity, transmissionsystem){
          this.companyname=companyname;
          this.carcolor=carcolor;
          this.carmodel=carmodel;
          this.engineCapacity=engineCapacity;
          this.transmissionsystem=transmissionsystem;
    }

    }
    const vehicleDetails1=new vehicleDetails ("Honda","black","HondaCity","1500cc","Automatic")
    const vehicleDetails2=new vehicleDetails ("Tata","White","Nexon","1300cc","Manual")
    const vehicleDetails3=new vehicleDetails  ("Suzuki","Gray","Swift","1400cc","Automatic")
    const vehicleDetails4=new vehicleDetails ("Nissan","blue","Nissan Magnite","1800cc","Manual")
    const vehicleDetails5=new vehicleDetails ("Audi","off","Audi a4", "1700cc","Automatic")
    
    console.log("------ Step1 --------");
    const arrayVehicles=[vehicleDetails1,vehicleDetails2,vehicleDetails3,vehicleDetails4,vehicleDetails5]
    console.log(
      `Vehicle Details: Company Name --> ${vehicleDetails1.companyname} Car Color --> ${vehicleDetails1.carcolor}    Engine Capacity --> ${vehicleDetails1.engineCapacity} Transmission System --> ${vehicleDetails1.transmissionsystem}`
    );

    console.log(
      `Vehicle Details: Company Name --> ${vehicleDetails2.companyname} Car Color --> ${vehicleDetails2.carcolor}    Engine Capacity --> ${vehicleDetails2.engineCapacity} Transmission System --> ${vehicleDetails2.transmissionsystem}`
    );
    console.log(
      `Vehicle Details: Company Name --> ${vehicleDetails3.companyname} Car Color --> ${vehicleDetails3.carcolor}    Engine Capacity --> ${vehicleDetails3.engineCapacity} Transmission System --> ${vehicleDetails3.transmissionsystem}`
    );
    console.log(
      `Vehicle Details: Company Name --> ${vehicleDetails4.companyname} Car Color --> ${vehicleDetails4.carcolor}    Engine Capacity --> ${vehicleDetails4.engineCapacity} Transmission System --> ${vehicleDetails4.transmissionsystem}`
    );
    console.log(
      `Vehicle Details: Company Name --> ${vehicleDetails5.companyname} Car Color --> ${vehicleDetails5.carcolor}    Engine Capacity --> ${vehicleDetails5.engineCapacity} Transmission System --> ${vehicleDetails5.transmissionsystem}`
    );
console.log("========================================================================================================");
console.log("-------- Step 2 --------");

class college {
         collegeName;
         location;
         educationField;
         collageEstablish;
constructor(collegeName,location,educationField,collageEstablish){
        this.collegeName=collegeName;
        this.location=location;
        this.educationField=educationField;
        this.collageEstablish=collageEstablish;

}           
  display(){
         (`Display:${this.collegeName},${this.location},${this.educationField},${this.collageEstablish}`);           
  }

}
const collegeDetails1= new  college  ("Sinhagad Institude","Sinhagad Road,Pune","Engineering","1996")
const collegeDetails2= new  college  ("SM Joshi College","Hadapsar,Pune","Computer Science","1992")
const collegeDetails3= new  college  ("Fergusion Colleg","FC Road,Pune","Arts and Science","1885")
const collegeDetails4=  new college  ("DY Patil University","Pimpari,Pune","Computer Science","1992")
collegeDetails1.display();
collegeDetails2.display();
collegeDetails3.display();
collegeDetails4.display();
console.log(`College Details : College Name--> ${collegeDetails1.collegeName} Location -->  ${collegeDetails1.location} Education Field -->  ${collegeDetails1.educationField} College Establish --> ${collegeDetails1.collageEstablish} `);
console.log(`College Details : College Name--> ${collegeDetails2.collegeName} Location -->  ${collegeDetails2.location} Education Field -->  ${collegeDetails2.educationField} College Establish --> ${collegeDetails2.collageEstablish} `)
console.log(`College Details : College Name--> ${collegeDetails3.collegeName} Location -->  ${collegeDetails3.location} Education Field --> ${collegeDetails3.educationField} College Establish --> ${collegeDetails3.collageEstablish} `);
console.log(`College Details : College Name--> ${collegeDetails4.collegeName} Location -->  ${collegeDetails4.location} Education Field --> ${collegeDetails4.educationField} College Establish --> ${collegeDetails4.collageEstablish} `);
console.log("=========================================================================================================");
console.log("------------- Step 3 ---------------");
function transverseObject(objectCollege) {
for (const key in objectCollege) {
                    
        console.log(college);
}
}
                    

transverseObject(collegeDetails1.collegeName)
transverseObject(collegeDetails2.location)
transverseObject(collegeDetails3.educationField)
transverseObject(collegeDetails4.collageEstablish)

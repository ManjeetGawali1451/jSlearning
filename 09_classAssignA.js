
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
    const vehicleDetails5=new vehicleDetails ("Audi","off","1700cc","Automatic")
    
    const arrayVehicles=[vehicleDetails1,vehicleDetails2,vehicleDetails3,vehicleDetails4,vehicleDetails5]
    for (const element of arrayVehicles) {
                    console.log(":",element);
                    
    }

  
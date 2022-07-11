class HospitalEmployee {
  //constructor
  constructor(name, department) {
    (this._name = name),
      (this._department = department),
      (this._vacationDays = 20);
  }

  //methods
  getName() {
    return `${this._name}`;
  }
  getVacationDays() {
    return `${this._vacationDays}`;
  }
  takeVacationDays(daysOff) {
    this._vacationDays = this._vacationDays - daysOff;
  }

  //static method
  static generateRandomNumber() {
    return Math.random() * 20;
  }
}

// Object instantiation
let HospitalEmployee1 = new HospitalEmployee("Amir", "Cardiology");
let HospitalEmployee2 = new HospitalEmployee("Ashraf", "Neuorology");

// Accessing Methods
console.log(HospitalEmployee1.getVacationDays());
HospitalEmployee1.takeVacationDays(2);
console.log(HospitalEmployee1.getVacationDays());

//Inheritance
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name); //calling the super class
    this._certifications = certifications;
  }
  addCertification(cert) {
    this._certifications.push(cert);
  }
}

// Inheritance
let nurse1 = new Nurse("Amir", ["Cardiology", "Neurology"]);
console.log(nurse1.getName());
console.log(nurse1._certifications);
nurse1.takeVacationDays(5);
console.log(nurse1.getVacationDays());
nurse1.addCertification("Psychology");
console.log(nurse1._certifications);

// Static method
console.log(HospitalEmployee.generateRandomNumber());

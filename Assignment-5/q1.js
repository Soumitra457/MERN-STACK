let Employee = {
    name: "Soumitra Behera",
    email: "soumitra432@gmail.com",
    phone: 9874356210,
    basicSalary: 71000,
    totalSalary: function(){
    const HRA = 0.15*this.basicSalary;
    const specialAllowance = 0.2*this.basicSalary;
    var totalSal = this.basicSalary + HRA + specialAllowance;
    
    if(this.basicSalary<40000)
        totalSal = totalSal - (0.10*totalSal);
    else if(this.basicSalary<50000)
        totalSal = totalSal - (0.15*totalSal);
    else if(this.basicSalary<70000)
        totalSal = totalSal - (0.20*totalSal);
    else if(this.basicSalary>70000)
        totalSal = totalSal - (0.30*totalSal);
    
    
    return totalSal;
    }
}
console.log(`Name: ${Employee.name}`);
console.log(`Email: ${Employee.email}`);
console.log(`Phone: ${Employee.phone}`);
console.log(`Basic Salary: ${Employee.basicSalary}`);
console.log(`Salary after tax: ${Employee.totalSalary()}`);
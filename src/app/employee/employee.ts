import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  isClicked: boolean = false;
  employees: any[] = [
    { empid: 1, empname: 'Manik', empqualification: 'MCA' },
    { empid: 2, empname: 'Mega', empqualification: 'MCA' },
    { empid: 3, empname: 'Vishwa', empqualification: 'BE' },
    { empid: 4, empname: 'Sivs', empqualification: 'B.com' },
  ];

  companies: string[] = ['HCL', 'CTS', 'Accenture', 'Wipro'];
  onSubmit(name: string) {
    alert(`${name} has been selected`);
  }

  marks: any[] = [{ english: 65, maths: 70, science: 65, social: 50, general: 70 }];
  perform() {
    this.isClicked = true;
  }
}

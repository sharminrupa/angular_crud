import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
// tslint:disable-next-line:whitespace
id: ;
  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
  }
  newEmployee(): void{
    this.submitted = false;
    this.employee = new Employee();
  }

    // tslint:disable-next-line:typedef
    save(){
      this.employeeService
      .createEmployee(this.id, this.employee).subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      },
        error => console.log(error));
    }
  // tslint:disable-next-line:typedef
  id(id: any, employee: Employee) {
    throw new Error('Method not implemented.');
  }

    // tslint:disable-next-line:typedef
    onSubmit(){
      this.submitted = true;
      this.save();
    }
    // tslint:disable-next-line:typedef
    gotoList(){
      this.router.navigate(['/employees']);
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params.id;

    this.employeeService.getEmployee(this.id)
    .subscribe(data => {
      console.log(data);
      this.employee = data;
    },
    error => console.log(error));
  }
  updateEmployee(): void{
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.gotoList();
    },
    error => console.log(error));
  }
  onSubmit(): void{
    this.updateEmployee();
  }
  gotoList(): void{
    this.router.navigate(['/employees']);
  }
}

// import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empliyees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  reloadData(){
    this.empliyees = this.employeeService.getEmployeeList();
  }

  // tslint:disable-next-line:typedef
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    }

    // tslint:disable-next-line:typedef
    employeeDetails(id: number){
      this.router.navigate(['details', id]);
    }

}

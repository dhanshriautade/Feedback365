import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/components/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  display: boolean = false;
  name;
  designation;
  empid;
  totalvalue;
  constructor(public AuthService: AuthService,private router: Router) { 
    this.name = localStorage.getItem('name');
    this.designation= localStorage.getItem('Designation');
    this.empid = localStorage.getItem('id');
    this.AuthService.GetTotalEvent().subscribe(res => {
      this.totalvalue = res;
      // console.log('lsist', this.totalvalue);
    })
  }

  showfeedback(){
    this.router.navigateByUrl('/main/feedback');
  }

  ngOnInit() {
  }
  showDialog(){
    this.display = true;
  }

}

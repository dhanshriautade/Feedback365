import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showDialog(){
    this.display = true;
  }

}

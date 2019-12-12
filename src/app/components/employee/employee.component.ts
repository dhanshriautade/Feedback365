import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  results : string[];
  text: string;
  id;
  constructor() {
    
   }


  search(event){
    this.results = ['aashish', 'ajay', 'Rama', 'Pidi'];
  }

  ngOnInit() {
  }

}

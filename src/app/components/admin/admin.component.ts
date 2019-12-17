import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/components/services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  results : string[];
  text: string;
  id;
  data;
  name;
  designation;
  empid;
  config: any;
  display: boolean = false;
  CreateEvent = false;
  contentEditable;
  EventList = true;
  constructor(public AuthService: AuthService,) {
    this.name = localStorage.getItem('name');
    this.designation= localStorage.getItem('Designation');
    this.empid = localStorage.getItem('id');
      this.AuthService.GetEvent().subscribe(res => {
      this.data = res
      console.log(this.data);
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.data.count
      };
     })

   
   }
   pageChanged(event){
    this.config.currentPage = event;
  }

  toggleEditable(event) {
    debugger;
    if ( event.target.checked ) {
        this.contentEditable = true;
   }
}

  OpenEvent(){
    this.CreateEvent= true;
    this.EventList = false;
  }

  CloseEvent(){
    this.CreateEvent= false;
    this.EventList = true;
  }

  search(event){
    this.results = ['aashish', 'ajay', 'Rama', 'Pidi'];
  }
  showDialog() {
    this.display = true;
}


  ngOnInit() {
  }

}

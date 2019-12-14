import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  results : string[];
  text: string;
  id;
  display: boolean = false;
  constructor() {
    
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

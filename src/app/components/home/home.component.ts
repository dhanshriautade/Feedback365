import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name;
  constructor() {
    this.name = localStorage.getItem('name');
    console.log('data',this.name );
   }

  ngOnInit() {
  }

}

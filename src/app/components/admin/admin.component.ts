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
  display: boolean = false;
  constructor(public AuthService: AuthService,) {
    this.AuthService.GetEvent().subscribe(res => {
      this.data = res
      console.log(this.data);
     })
    
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

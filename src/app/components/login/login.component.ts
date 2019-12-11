import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  activeAllUsers = false;
  constructor() { }


  myTeamView(flag) {
    // this.activeAllUsers = false;
    if (flag === 1) {
        this.activeAllUsers = true;
    }
    else{
      this.activeAllUsers = false;
    }
    
  }

  ngOnInit() {
  }

}

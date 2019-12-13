import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/services/auth.service';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  activeAllUsers = false;
  loginForm: FormGroup;
  role;
  data;
  constructor(private formBuilder: FormBuilder, public AuthService: AuthService) { }


  myTeamView(flag) {
    // this.activeAllUsers = false;
    if (flag === 1) {
        this.activeAllUsers = true;
        this.role= 'employee';
    }
    else{
      this.activeAllUsers = false;
      this.role= 'admin';
    }
    
  }
  Login(){

    this.data = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password,
      "role" : this.role
    }
    this.AuthService.LogIn(this.data).subscribe(res => {
      console.log(res);

  })
     console.log(this.data);
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
      
    });
  }

}

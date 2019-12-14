import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/services/auth.service';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  })
  submitted = false;
  activeAllUsers = false;

  role;
  data;
  constructor(private formBuilder: FormBuilder, public AuthService: AuthService, private router: Router) { }


  myTeamView(flag) {
    // this.activeAllUsers = false;
    if (flag === 1) {
      this.activeAllUsers = true;
      this.role = 'employee';
    }
    else {
      this.activeAllUsers = false;
      this.role = 'admin';
    }

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  Login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.data = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password,
      "role": this.role
    }
    this.AuthService.LogIn(this.data).subscribe(res => {
      console.log(res);

    })
  }
}

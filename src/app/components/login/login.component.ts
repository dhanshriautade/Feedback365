import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/services/auth.service';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  spinner = false;
  role = 'admin';
  data;
  res;
  constructor(private formBuilder: FormBuilder, public AuthService: AuthService, private toastr: ToastrService, private router: Router) { }


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
    this.spinner =true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.data = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password,
      "role": this.role
    }
    console.log(this.data);
    this.AuthService.LogIn(this.data).subscribe(res => {  
     this.res =res;    
     console.log('list',this.res);
     localStorage.setItem('name', this.res.name);
     localStorage.setItem('Designation',this.res.designation);
     localStorage.setItem('id',this.res.empId);
     this.spinner =false;
 
    if(this.res.role == 'admin'){
      this.router.navigateByUrl('/main/admin');
    }
    else if(this.res.role == 'employee'){  
      this.router.navigateByUrl('/main/employee');
    }
    else{
      this.toastr.error('Invalid credentials Oops!')
    }
  })
  }
}

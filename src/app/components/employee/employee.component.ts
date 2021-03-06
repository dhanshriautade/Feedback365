import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/components/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  display: boolean = false;
  name;
  designation;
  empid;
  totalvalue;
  detail_info;
  data;
  detailem_info;
  my_report;
  constructor(public AuthService: AuthService,private router: Router,private toastr: ToastrService,) { 
    this.name = localStorage.getItem('name');
    this.designation= localStorage.getItem('Designation');
    this.empid = localStorage.getItem('id');
    this.AuthService.GetTotalEvent().subscribe(res => {
      this.totalvalue = res;
      // console.log('lsist', this.totalvalue);
    })
    this.detail_info = {
    
        "fromEmpId" : this.empid
      
    }
    this.AuthService.FeedbackSent(this.detail_info ).subscribe(res => {  
      this.detailem_info =res;
      console.log(this.detailem_info);
    })
  }

  showfeedback(id,name,date){
    localStorage.setItem('Toid',id);
    localStorage.setItem('Toname',name);
    localStorage.setItem('Deudate',date);
    this.router.navigateByUrl('/main/feedback');
  }

  ngOnInit() {
  }
  showDialog(){
    this.display = true;
    this.data = {
      "toEmpId":this.empid
    }
    this.display = true;
    this.AuthService.MyReport(this.data).subscribe(res => { 
      this.my_report = res; 
      if(res == null){
              this.display = false;
              this.toastr.error('Not Generated Report!')
              
           }
      // console.log(JSON.stringify(res));
     })
  // console.log('res',this.my_report);
  //    if(this.my_report == undefined){
  //       this.display = false;
  //       this.toastr.error('Not Generated Report!')
        
  //    }
  }

}

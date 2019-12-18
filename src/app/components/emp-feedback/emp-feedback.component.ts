import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/services/auth.service';
@Component({
  selector: 'app-emp-feedback',
  templateUrl: './emp-feedback.component.html',
  styleUrls: ['./emp-feedback.component.scss']
})
export class EmpFeedbackComponent implements OnInit {
  question;
  data;
  empid
  arr: any = []
  questionAnswer: {
    q1: string,
    q2: string
  }
  constructor(public AuthService: AuthService) {
    this.empid = localStorage.getItem('id');
    this.AuthService.GetAllQuestion().subscribe(res => {
      this.question = res;
      console.log(this.question);
    })
  }

  que_1(id, count) {
    if (id == 1) {
      this.arr[0] = count;

    }
    if (id == 2) {
      this.arr[1] = count;

    }
    if (id == 3) {
      this.arr[2] = count;

    }
    if (id == 4) {
      this.arr[3] = count;

    }
    if (id == 5) {
      this.arr[id] = count;

    }   
  }

  SentAnswer(){
    this.data = {
      "fromEmpId" : this.empid,
      "toEmpId": 2,
      "rewardPoints": this.arr
      }
    console.log('data',this.data);
    this.AuthService.SentAnswer(this.data).subscribe(res => {  

    })
  }

  ngOnInit() {
  }

}

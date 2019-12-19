import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/components/services/auth.service';
@Component({
  selector: 'app-emp-feedback',
  templateUrl: './emp-feedback.component.html',
  styleUrls: ['./emp-feedback.component.scss']
})
export class EmpFeedbackComponent implements OnInit ,AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.q1.nativeElement.childNodes[0].childNodes[0].className)
    this.renderer.addClass(this.q1.nativeElement.childNodes[2].childNodes[0],"active");
  }
  question;
  data;
  empid;
  toid;
  toname;
  Duedate;
  arr: any = []
  @ViewChild('q1',{static:false}) q1:ElementRef;
  @ViewChild('q2',{static:false}) q2:ElementRef;
  @ViewChild('q3',{static:false}) q3:ElementRef;
  @ViewChild('q4',{static:false}) q4:ElementRef;
  questionAnswer: {
    q1: string,
    q2: string
  }
  constructor(public AuthService: AuthService,private renderer:Renderer2) {
    this.empid = localStorage.getItem('id');
    this.toname = localStorage.getItem('Toname');
    this.Duedate = localStorage.getItem('Deudate');
    this.toid = localStorage.getItem('Toid');
    this.AuthService.GetAllQuestion().subscribe(res => {
      this.question = res;
      console.log(this.question);
    })
  }

  que_1(id, count) {
    if (id == 1) {
      this.arr[0] = count;
      this.renderer.removeClass(this.q1.nativeElement.childNodes[0].childNodes[0],"active");
      this.renderer.removeClass(this.q1.nativeElement.childNodes[1].childNodes[0],"active");
      this.renderer.removeClass(this.q1.nativeElement.childNodes[2].childNodes[0],"active");
      this.renderer.removeClass(this.q1.nativeElement.childNodes[3].childNodes[0],"active");
      this.renderer.removeClass(this.q1.nativeElement.childNodes[4].childNodes[0],"active");
      if(count==1)
      this.renderer.addClass(this.q1.nativeElement.childNodes[0].childNodes[0],"active");
      else if(count==2)
      this.renderer.addClass(this.q1.nativeElement.childNodes[1].childNodes[0],"active");
      else if(count==3)
      this.renderer.addClass(this.q1.nativeElement.childNodes[2].childNodes[0],"active");
      else if(count==4)
      this.renderer.addClass(this.q1.nativeElement.childNodes[3].childNodes[0],"active");
      else if(count==5)
      this.renderer.addClass(this.q1.nativeElement.childNodes[4].childNodes[0],"active");

    }
    if (id == 2) {
      this.arr[1] = count;
      this.renderer.removeClass(this.q2.nativeElement.childNodes[0].childNodes[0],"active");
      this.renderer.removeClass(this.q2.nativeElement.childNodes[1].childNodes[0],"active");
      this.renderer.removeClass(this.q2.nativeElement.childNodes[2].childNodes[0],"active");
      this.renderer.removeClass(this.q2.nativeElement.childNodes[3].childNodes[0],"active");
      this.renderer.removeClass(this.q2.nativeElement.childNodes[4].childNodes[0],"active");
      if(count==1)
      this.renderer.addClass(this.q2.nativeElement.childNodes[0].childNodes[0],"active");
      else if(count==2)
      this.renderer.addClass(this.q2.nativeElement.childNodes[1].childNodes[0],"active");
      else if(count==3)
      this.renderer.addClass(this.q2.nativeElement.childNodes[2].childNodes[0],"active");
      else if(count==4)
      this.renderer.addClass(this.q2.nativeElement.childNodes[3].childNodes[0],"active");
      else if(count==5)
      this.renderer.addClass(this.q2.nativeElement.childNodes[4].childNodes[0],"active");


    }
    if (id == 3) {
      this.arr[2] = count;
      this.renderer.removeClass(this.q3.nativeElement.childNodes[0].childNodes[0],"active");
      this.renderer.removeClass(this.q3.nativeElement.childNodes[1].childNodes[0],"active");
      this.renderer.removeClass(this.q3.nativeElement.childNodes[2].childNodes[0],"active");
      this.renderer.removeClass(this.q3.nativeElement.childNodes[3].childNodes[0],"active");
      this.renderer.removeClass(this.q3.nativeElement.childNodes[4].childNodes[0],"active");
      if(count==1)
      this.renderer.addClass(this.q3.nativeElement.childNodes[0].childNodes[0],"active");
      else if(count==2)
      this.renderer.addClass(this.q3.nativeElement.childNodes[1].childNodes[0],"active");
      else if(count==3)
      this.renderer.addClass(this.q3.nativeElement.childNodes[2].childNodes[0],"active");
      else if(count==4)
      this.renderer.addClass(this.q3.nativeElement.childNodes[3].childNodes[0],"active");
      else if(count==5)
      this.renderer.addClass(this.q3.nativeElement.childNodes[4].childNodes[0],"active");


    }
    if (id == 4) {
      this.arr[3] = count;
      this.renderer.removeClass(this.q4.nativeElement.childNodes[0].childNodes[0],"active");
      this.renderer.removeClass(this.q4.nativeElement.childNodes[1].childNodes[0],"active");
      this.renderer.removeClass(this.q4.nativeElement.childNodes[2].childNodes[0],"active");
      this.renderer.removeClass(this.q4.nativeElement.childNodes[3].childNodes[0],"active");
      this.renderer.removeClass(this.q4.nativeElement.childNodes[4].childNodes[0],"active");
      if(count==1)
      this.renderer.addClass(this.q4.nativeElement.childNodes[0].childNodes[0],"active");
      else if(count==2)
      this.renderer.addClass(this.q4.nativeElement.childNodes[1].childNodes[0],"active");
      else if(count==3)
      this.renderer.addClass(this.q4.nativeElement.childNodes[2].childNodes[0],"active");
      else if(count==4)
      this.renderer.addClass(this.q4.nativeElement.childNodes[3].childNodes[0],"active");
      else if(count==5)
      this.renderer.addClass(this.q4.nativeElement.childNodes[4].childNodes[0],"active");


    }
    if (id == 5) {
      this.arr[id] = count;

    }   
  }

  SentAnswer(){
    this.data = {
      "fromEmpId" : this.empid,
      "toEmpId": this.toid,
      "rewardPoints": this.arr
      }
    console.log('data',this.data);
    this.AuthService.SentAnswer(this.data).subscribe(res => {  

    })
  }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  LogIn(data: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.post(environment.Login, data, { headers: headers });
  }
  SentAnswer(data: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.post(environment.SentAnswer, data, { headers: headers });
  }

  FeedbackSent(data: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.post(environment.feedbacksent, data, { headers: headers });
  }

  SentEvent(data:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.post(environment.SentEvent, data, { headers: headers });

  }

  MyReport(data:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.post(environment.myReport, data, { headers: headers });

  }
  GetEvent(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.get(environment.GetEvent, { headers: headers });
  }
  GetAllEmployee(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.get(environment.GetAllEmployee, { headers: headers });

  }
  GetAllQuestion(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.get(environment.GetAllQuestion, { headers: headers });

  }
  GetTotalEvent(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.get(environment.GetTotalEvent, { headers: headers });

    }
    ProfileInfo(data: any){
      // debugger;
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
       });
      return this.http.post(environment.ProfileInfo, data, { headers: headers });
    }
  
  
}

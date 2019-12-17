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
  GetTotalEvent(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    return this.http.get(environment.GetTotalEvent, { headers: headers });

    }
    ProfileInfo(data: any){
      debugger;
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
       });
      return this.http.post(environment.ProfileInfo, data, { headers: headers });
    }
  
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable, Subject } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getRemoteData() {
  // example to put auth in head for api request
  //  let headers = new HttpHeaders();
  //  this.authToken = this.loadToken();
  //  headers.append('Authorization', this.authToken);
  //  headers.append('content-Type','application/json');
    return this.http.get("https://fintechhorizonsmedia.com/posts.json");
  }
}
//get auth token
//loadToken(){
//    const Token = localStorage.getItem('id_token');
//     return Token;
//  }

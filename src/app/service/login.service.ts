import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(username: string, password:string):Observable<any>{
    let url = "http://localhost:8080/api/login";
    const body = {
      username, password
    }
    return this.http.post(url, body)
  }
}

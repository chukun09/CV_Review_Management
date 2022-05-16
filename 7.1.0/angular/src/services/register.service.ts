import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addNewUserInformation(body: any) {
    return this.http.post("https://localhost:44311/api/services/app/UserEntity/Create", body, this.headers);
  }
}
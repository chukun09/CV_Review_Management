import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import {API_CONSTS} from '@shared/AppConsts';
 
@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addNewUserInformation(body: any) {
    return this.http.post(environment.BASE_API_URL + API_CONSTS.UserEntity.CREATE, body, this.headers);
  }
}
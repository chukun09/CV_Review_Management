import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { API_CONSTS } from '@shared/AppConsts';

@Injectable({ providedIn: 'root' })
export class UserInformationService {
  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
   getUserInformationByUserId(id) {
    return this.http.get<any>(environment.BASE_API_URL + API_CONSTS.UserEntity.GET_BY_USERID + "?id=" + id);
  }
   getUserId(id){
    return this.http.get<any>(environment.BASE_API_URL + API_CONSTS.UserEntity.GET_USERID + "?id=" + id);
  }
}
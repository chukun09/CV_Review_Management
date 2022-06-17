import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import {API_CONSTS} from '../shared/AppConsts';
 
@Injectable({ providedIn: 'root' })
export class TemplateService {
  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
   getTemplateById(id) {
    return this.http.get<any>(environment.BASE_API_URL + API_CONSTS.TemplateEntity.GET_BY_ID + "?id=" + id);
  }
    getAllTemplate() {
    return  this.http.get<any>(environment.BASE_API_URL + API_CONSTS.TemplateEntity.GET_ALL_TEMPLATE);
  }

}
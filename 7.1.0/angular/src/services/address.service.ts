import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { API_CONSTS } from '../shared/AppConsts';
@Injectable({ providedIn: 'root' })
export class AddressService {
  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getAllProvinces(){
    return this.http.get<any>(environment.BASE_API_URL + API_CONSTS.Address.GET_ALL_PROVINCE);
  }
  getDistrictsByProvince(id){
    return this.http.get<any>(environment.BASE_API_URL + API_CONSTS.Address.GET_DISTRICT_BY_PROVINCE + "?id=" + id);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { API_CONSTS } from '../shared/AppConsts';
@Injectable({ providedIn: 'root' })
export class CVInformationService {
  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  GetALLCV(){
    
  }
  getCVInformationByUserId(id) {
    return this.http.get<any>(environment.BASE_API_URL + API_CONSTS.CVEntity.GET_ALL_BY_USER_ID + "?userId=" + id);
  }
   getDetailCVById(id){
    return this.http.get<any>(environment.BASE_API_URL + API_CONSTS.CVEntity.GET_CV_DETAIL_BY_ID + "?id=" + id);
  }
  toogleLikeCV(userId, CVId){
    return this.http.put<any>(environment.BASE_API_URL + API_CONSTS.CVLikeEntity.UPDATE_STATUS_LIKE + "?UserId=" + userId + "&CVId=" + CVId, this.headers);
  }
}
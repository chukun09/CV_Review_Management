import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { API_CONSTS } from '@shared/AppConsts';

@Injectable({ providedIn: 'root' })
export class WebViewService {
  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  async getJsonPDFbyCVId(id) {
    return await this.http.get<any>(environment.BASE_API_URL + API_CONSTS.PDFEntity.GET_PDF_JSON + "?id=" + id);
  }
  addNewAnnotation(body: any) {
    return this.http.post(environment.BASE_API_URL + API_CONSTS.PDFEntity.CREATE, body, this.headers);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserInformationService {
  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  async getUserInformationByUserId(id) {
    return await this.http.get<any>("https://localhost:44311/api/services/app/UserEntity/GetUserEntityByUserId?id=" + id);
  }
}
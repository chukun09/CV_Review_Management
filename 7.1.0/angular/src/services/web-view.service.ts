import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class WebViewService{
    constructor(private http: HttpClient) { }

    headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    async getJsonPDF(){
         return  await this.http.get<any>("https://localhost:44311/api/services/app/PDFEntity/Get?Id=4");
    }
    addNewAnnotation(body : any){
      return this.http.post("https://localhost:44311/api/services/app/PDFEntity/Create", body, this.headers);
    }
}
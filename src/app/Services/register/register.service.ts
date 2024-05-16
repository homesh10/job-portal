import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}
  sendMessag(RegisterFormData: any): Observable<any> {
    const ApiUrl='http://localhost:3000/api/post'; // Post Link API 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });// Set appropriate headers if needed
    // Post the data to the API
    return this.http.post(ApiUrl,RegisterFormData, { headers });
  }
}

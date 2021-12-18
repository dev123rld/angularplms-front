import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateClientService {

  constructor(private http:HttpClient) { }

  createClient(data:any): Observable<any>{
    return this.http.post('http://20.117.66.101:8082/api/client/sendSubscriptionOTPVerificationEmail',data);
  }
}

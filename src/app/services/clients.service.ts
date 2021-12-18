import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }
  clientDetails():Observable<any>{
   return this.http.get("http://localhost:3000/api/client/status");
  }

  userDetails():Observable<any>{
    return this.http.get("http://localhost:3000/api/user/status");

  }
  userTableData():Observable<any>{
    return this.http.get("http://localhost:3000/api/userRole");

  }
  courseData():Observable<any>{
    return this.http.get("http://localhost:3000/api/course");

  }

  eventData():Observable<any>{
    return this.http.get("http://localhost:3000/api/event");

  }
  trainingData():Observable<any>{
    return this.http.get("http://localhost:3000/api/training");

  }



}

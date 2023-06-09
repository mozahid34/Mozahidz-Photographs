import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  data:any;

  constructor(private http:HttpClient)  {

  }




sendData(api:any) {
  return this.http.get(api).pipe(retry(3));


}


}

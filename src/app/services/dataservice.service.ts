import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  data:any;

  constructor(private http:HttpClient) {

  }


  getData() {
    this.http.get('http://localhost:4200/assets/data.json').subscribe((res) => {
      this.data = res;
      
    })
}
}

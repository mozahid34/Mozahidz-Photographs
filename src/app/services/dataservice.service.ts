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


  getData() {
    this.http.get('http://localhost:4200/assets/data.json').pipe(retry(3)).subscribe((res) => {
      this.data = res;

    })
}

sendData(api:any) {
  return this.http.get(api).pipe(retry(3));


}


}

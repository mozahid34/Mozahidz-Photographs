import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {

  datas:any;
  cityData:any = [{}];



  constructor(private service: DataserviceService, private route:Router) {

  }

  ngOnInit(): void {
    this.getData();

  }
  getData() {
    let api = "http://localhost:4200/assets/data.json";
    this.service.sendData(api).subscribe((res) => {
      this.datas = res;

    this.datas.forEach((element: { category: string; }) => {
      if(element?.category == "City Life") {
        this.cityData.push(element)

      }


    });
    this.cityData.shift()
    })

  }
  gotoDetails(id:string) {
    this.route.navigate(['details', id])


  }
}

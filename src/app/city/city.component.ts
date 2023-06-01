import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {

  datas:any = this.service.data;

  

  constructor(private service: DataserviceService, private route:Router) {

  }

  ngOnInit(): void {
    this.service.getData();
    console.log(this.datas);
    
  }
  gotoDetails(id:string) {
    this.route.navigate(['details', id])
    

  }
}

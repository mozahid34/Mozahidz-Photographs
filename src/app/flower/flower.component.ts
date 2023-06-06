import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss']
})
export class FlowerComponent {

  datas:any;
  flowerData:any = [{}];



  constructor(private service: DataserviceService, private route:Router) {

  }

  ngOnInit(): void {
    this.getData();


  }
  getData() {
    let api = "http://localhost:4200/assets/data.json";
    this.service.sendData(api).subscribe(res => {
      this.datas = res;

      this.datas.forEach((element: { category: string; }) => {
        if(element?.category == "Flowers") {
          this.flowerData.push(element)

        }


      });
    })
  }

  gotoDetails(id:string) {
    this.route.navigate(['details', id])


  }

}

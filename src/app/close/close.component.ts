import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.scss']
})
export class CloseComponent {

  datas:any;
  closeData:any= [{}];



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
        if(element?.category == "Close Natural") {
          this.closeData.push(element)

        }


      });
      this.closeData.shift()
    })
  }

  gotoDetails(id:string) {
    this.route.navigate(['details', id])


  }

}

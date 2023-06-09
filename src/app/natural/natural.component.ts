import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-natural',
  templateUrl: './natural.component.html',
  styleUrls: ['./natural.component.scss']
})
export class NaturalComponent implements OnInit {
  datas:any;

  naturalData:any = [{}];



  constructor(private service: DataserviceService, private route:Router) {

  }

  ngOnInit(): void {
    this.getData();




  }
  getData() {
    let api = 'assets/data.json';
    this.service.sendData(api).subscribe((res) => {
      this.datas = res;

      this.datas.forEach((element: { category: string; }) => {
        if(element?.category == "Natural") {
          this.naturalData.push(element)

        }



      });

      this.naturalData.shift()




    })


  }


  gotoDetails(id:string) {
    this.route.navigate(['details', id])


  }

}

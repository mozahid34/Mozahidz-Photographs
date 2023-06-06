import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';
import { DetailviewComponent } from '../detailview/detailview.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datas:any;



  constructor(private service:DataserviceService, private route:Router) {

  }

  ngOnInit(): void {
    this.getData();

  }
  getData() {
    let api = "http://localhost:4200/assets/data.json";
    this.service.sendData(api).subscribe((res:any) => {
      console.log(res);
      this.datas = res;


    })
  }

  gotoDetails(id:string) {
    this.route.navigate(['details', id])


  }





}

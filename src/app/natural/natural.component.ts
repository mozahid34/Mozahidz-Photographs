import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-natural',
  templateUrl: './natural.component.html',
  styleUrls: ['./natural.component.scss']
})
export class NaturalComponent implements OnInit {
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

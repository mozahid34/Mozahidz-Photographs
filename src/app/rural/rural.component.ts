import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rural',
  templateUrl: './rural.component.html',
  styleUrls: ['./rural.component.scss']
})
export class RuralComponent {
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

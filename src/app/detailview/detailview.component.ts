import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  photo:any;
  photos:any;
  id:string = '';
  router: any;

  constructor(private route:ActivatedRoute, router:Router,  private service:DataserviceService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getPhotos();

  }

  getPhotos() {
    let api = 'http://localhost:4200/assets/data.json';
    this.service.sendData(api).subscribe((photos) => {
      this.photos = photos;
      let index = this.photos.findIndex((photo:{id:string}) =>  photo.id == this.id);

      if(index > -1 ) {
        this.photo =  this.photos[index];
      }

    })


  }
  gotoDetails(id:string) {
    this.router.navigate(['details', id])


  }


}

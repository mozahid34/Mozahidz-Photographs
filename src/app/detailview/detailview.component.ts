import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  photo:any;
  photos:any;
  id:string = '';

  constructor(private route:ActivatedRoute, private http:HttpClient) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getPhotos();
    
  }

  getPhotos() {
    this.http.get('http://localhost:4200/assets/data.json').subscribe((photos) => {
      this.photos = photos;
      let index = this.photos.findIndex((photo:{id:string}) =>  photo.id == this.id);

      if(index > -1 ) {
        this.photo =  this.photos[index];
      }
      
    })


  }


}

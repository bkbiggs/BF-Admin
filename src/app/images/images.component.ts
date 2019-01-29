import { Component, OnInit } from '@angular/core';

import { Image } from '../image.model';

import { DataService } from '../data.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images$: Image[];

  constructor(private dataservice_a: DataService) { }

  ngOnInit() {
    return (
    this.dataservice_a.getImages().subscribe(data => this.images$ = data)
    );
  }

  updateImage(id: any) {
    console.log("updateImage("  + id + ")");
    this.dataservice_a.updateImage(id);
  }
  
}

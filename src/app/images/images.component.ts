import { Component, OnInit } from '@angular/core';

import { Image } from '../image.model';

import { DataService } from '../data.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  editOn: boolean = false;
  editId: string = '';
  images$: Image[];

  constructor(private dataservice_a: DataService) { }

  ngOnInit() {
    return (
    this.dataservice_a.getImages().subscribe(data => this.images$ = data)
    );
  }

  editImage(id: any) {
    this.editOn = !this.editOn; // toggle it
    if (this.editOn) { this.editId = id};
    console.log("editImage()");
  }

  updateImage(id: any, filename: string, camera: string, date: Date, time: string, description: Text, lastUpdate: string, status: string) {
    console.log("updateImage("  + id + 
", " + filename +
", " + camera + 
", " + date +
", " + time +
", " + description +
", " + lastUpdate +
", " + status +    
    ")");

    this.dataservice_a.updateImage(id, filename, camera, date, time, description, lastUpdate, status); 
        // .subscribe(data => this.images$ = data);
    this.editOn = false;
  }
  
  deleteImage(id: any) {
    console.log("deleteImage("  + id + ")");
    this.editOn = false;
    return;
  }

  cancelImage(id: any) {
    console.log("cancelImage("  + id + ")");
    this.editOn = false;
    return;
  }
}

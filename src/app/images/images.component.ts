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
  // editOn: boolean = false; 
  editOn: boolean = true; 
  editId: string = '';
  images$: Image[];

  message: string;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(message => this.message = message);
    return (
    this.dataservice.getImages().subscribe(data => this.images$ = data)
    );
  }

  editImage(id: any) {
    this.editOn = !this.editOn; // toggle it
    if (this.editOn) { this.editId = id};
    console.log("editImage(" + id +")");
    // this.image.editThisImage(this.images$[id]);
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

    this.dataservice.updateImage(id, filename, camera, date, time, description, lastUpdate, status)
      .subscribe(data => this.images$ = data); 

  this.editOn = false;
  this.editOn = true; 
  }
  
  deleteImage(id: any) {
    console.log("deleteImage("  + id + ")");
    this.editOn = false;
    this.editOn = true;
    return;
  }

  cancelImage(id: any) {
    console.log("cancelImage("  + id + ")");
    this.editOn = false;
    this.editOn = true;
    return;
  } 
}

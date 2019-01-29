import { Component, OnInit, Input } from '@angular/core';

import { Bird } from '../bird.model';

import { DataService } from '../data.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent implements OnInit {
  editingBird = false;
  birds$: Bird[];
  
  constructor(private dataservice_b: DataService) { }

  ngOnInit() {
    return (
      this.dataservice_b.getBirds().subscribe(data => this.birds$ = data)
    )
  }

  // editBird(id: string) {
  //   console.log("editBird(" + id + ")");
  //   this.dataservice_b.editBird(id).subscribe(data => this.birds$ = data);
  //   this.editingBird = true;
  // }

  cancelBird(msg:string) {
    console.log("cancelBird(" + msg + ")");
    this.dataservice_b.getBirds().subscribe(data => this.birds$ = data);
    this.editingBird = false;
  }

  createBird(com: string, sci: string, webData: string, webImage: string) {
    console.log("createBird(" + com + ", " + sci + ", " + webData + ", " + webImage + ")");
    this.dataservice_b.createBird(com, sci, webData, webImage).subscribe(data => this.birds$ = data);
    this.editingBird = false;
    //this.dataservice_b.getBirds().subscribe(data => this.birds$ = data)
  }

  updateBird(id: string, com: string, sci: string, webData: string, webImage: string) {
    console.log("updateBird(" + id + ", " + com + ", " + sci + ", " + webData + ", " + webImage + ")");
    this.dataservice_b.updateBird(id, com, sci, webData, webImage).subscribe(data => this.birds$ = data);
    this.editingBird = false;
    //this.dataservice_b.getBirds().subscribe(data => this.birds$ = data)
  }

  deleteBird(id: string) {
    console.log("deleteBird(" + id + ")");
    this.dataservice_b.deleteBird(id).subscribe(data => this.birds$ = data);
    this.editingBird = false;
  }

}

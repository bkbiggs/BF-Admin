
import { Component, OnInit, Input, Output } from '@angular/core';

import { Bird } from '../bird.model';

// ../bird.model is
// export class Bird {
//   id: number;
//   commonName: string;
//   scientificName: string;
//   webData: string;
//   webImage: string;
// }

import { DataService } from '../data.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent implements OnInit {
  editingBird = false;
  birds$: Bird[];

  message: string;
  
  // @Input() myBird: [{com: string, sci: string, webData: string, webImage: string}];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(message => this.message = message);
    return (
      this.dataservice.getBirds().subscribe(data => this.birds$ = data)
    )
  }

  // editBird(id: string) {
  //   console.log("editBird(" + id + ")");
  //   this.dataservice_b.editBird(id).subscribe(data => this.birds$ = data);
  //   this.editingBird = true;
  // }

  cancelBird(msg:string) {
    this.dataservice.changeMessage("Hello there");
    console.log("cancelBird(" + msg + ")");
    this.dataservice.getBirds().subscribe(data => this.birds$ = data);
    this.editingBird = false;
  }

  createBird(com: string, sci: string, webData: string, webImage: string) {
    this.dataservice.changeMessage("added bird " + com);
    console.log("createBird(" + com + ", " + sci + ", " + webData + ", " + webImage + ")");
    this.dataservice.createBird(com, sci, webData, webImage).subscribe(data => this.birds$ = data);
    this.editingBird = false;
    //this.dataservice_b.getBirds().subscribe(data => this.birds$ = data)
  }

  updateBird(id: string, com: string, sci: string, webData: string, webImage: string) {
    console.log("updateBird(" + id + ", " + com + ", " + sci + ", " + webData + ", " + webImage + ")");
    this.dataservice.updateBird(id, com, sci, webData, webImage).subscribe(data => this.birds$ = data);
    this.editingBird = false;
    //this.dataservice_b.getBirds().subscribe(data => this.birds$ = data)
  }

  deleteBird(id: string) {
    this.dataservice.changeMessage("deleted bird " + id);
    console.log("deleteBird(" + id + ")");
    this.dataservice.deleteBird(id).subscribe(data => this.birds$ = data);
    this.editingBird = false;
  }

}

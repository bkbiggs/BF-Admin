import { Component, OnInit } from '@angular/core';

// import { Link } from '../links/link.model';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // links$: Link[];
  
  constructor(private dataservice: DataService) {}
  
  ngOnInit() {
    // return (
    //   this.dataservice.getLinks().subscribe(data => this.links$ = data)
    // )
  }

  // public onEdit(event: any) {
    
  //   console.log("onEdit(" + event + ")");
  // }

}

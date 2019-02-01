import { Component, OnInit, Input } from '@angular/core';

import { Link } from '../link.model';

import { DataService } from '../data.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  links$: Link[];

  message:string;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(message => this.message = message);
    return (
      this.dataservice.getLinks().subscribe(data => this.links$ = data)
    )
  }


  createLink(id2: string, id3: string) {
    console.log("createLink(" + id2 + ", " + id3 + ")");
    this.dataservice.createLink( id2, id3).subscribe(data => this.links$ = data);
    this.dataservice.changeMessage( "added link for " + id2 + " & " + id3 );
    return
  }


  deleteLink(id: string) {
    console.log("deleteLink(" + id + ")");
    this.dataservice.deleteLink(id).subscribe(data => this.links$ = data);
    this.dataservice.changeMessage("deleted link " + id);
    return;
  }

}

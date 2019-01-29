import { Component, OnInit } from '@angular/core';

import { Link } from '../link.model';

import { DataService } from '../data.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  links$: Link[];

  constructor(private dataservice_c: DataService) { }

  ngOnInit() {
    return (
      this.dataservice_c.getLinks().subscribe(data => this.links$ = data)
    )
  }


  createLink(id2: string, id3: string) {
    console.log("createLink(" + id2 + ", " + id3 + ")");
    this.dataservice_c.createLink( id2, id3);
  }

  // updateLink(id: string, id2: string, id3: string) {
  //   console.log("updateLink(" + id + ", " + id2 + ", " + id3 + ")");
  //   this.dataservice_c.updateLink(id, id2, id3);
  // }


  deleteLink(id: string) {
    console.log("deleteLink(" + id + ")");
    return (this.dataservice_c.deleteLink(id));
  }

}

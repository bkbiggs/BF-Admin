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

  constructor(private dataservice_b: DataService) { }

  ngOnInit() {
    return (
      this.dataservice_b.getLinks().subscribe(data => this.links$ = data)
    )
  }


  createLink(id2: string, id3: string) {
    console.log("createLink(" + id2 + ", " + id3 + ")");
    return this.dataservice_b.createLink( id2, id3).subscribe(data => this.links$ = data);
  }


  deleteLink(id: string) {
    console.log("deleteLink(" + id + ")");
    return (this.dataservice_b.deleteLink(id).subscribe(data => this.links$ = data));
  }

}

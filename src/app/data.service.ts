import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Observable} from "rxjs/Observable";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

import { Link } from './link.model';
import { Bird } from './bird.model';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  linkUrl = 'http://10.0.1.14/updateDescription/getLinkData.php';
  birdUrl = 'http://10.0.1.14/updateDescription/getBirdData.php';
  imageUrl = 'http://10.0.1.14/updateDescription/getImageData.php';

  // add createImageUrl
  updateImageUrl =  'http://10.0.1.14/updateDescription/myDescEdit.php';
  // add deleteImageUrl
  
  // add createBirdUrl
  createBirdUrl = 'http://10.0.1.14/updateDescription/createBirdData.php'
  updateBirdUrl = 'http://10.0.1.14/updateDescription/updateBirdData.php';
  deleteBirdUrl = 'http://10.0.1.14/updateDescription/deleteBirdData.php';

  createLinkUrl = 'http://10.0.1.14/updateDescription/createLinkData.php';
  // updateLinkUrl = "#";
  deleteLinkUrl = 'http://10.0.1.14/updateDescription/deleteLinkData.php';



  constructor(private _http: HttpClient) { }


  getLinks() {
    return this._http.get<Link[]>(this.linkUrl);
  }

  getBirds() {
    return this._http.get<Bird[]>(this.birdUrl );
  }

  getImages() {
    return this._http.get<Image[]>(this.imageUrl );
  }



  updateImage(id: string)  {
   
    console.log("updateImage(" + id + ")");
    return this._http.get<Bird[]>(this.imageUrl + "?id=" + id); 
  }

  createBird(com: string, sci: string, webData: string, webImage: string)  {
   
    console.log("createBird(" + com + ", " + sci + "," + webData + ", " + webImage + ")");

    var request = this.createBirdUrl + "?comName=" + com + "&sciName=" + sci + "&webData=" + webData + "&webImage=" + webImage;

    console.log("Create: " + request);
  
    return this._http.get<Bird[]>(request);

  }

  // run the update for the change interaction
  updateBird(id: string, com: string, sci: string, webData: string, webImage: string)  {
   
    console.log("updateBird(" + id + ", " + com + ", " + sci + "," + webData + ", " + webImage + ")");

    var request = this.updateBirdUrl + "?id=" + id + "&comName=" + com + "&sciName=" + sci + "&webData=" + webData + "&webImage=" + webImage;

    console.log("Update: " + request);
    return this._http.get<Bird[]>(request);
  }


  deleteBird(id: string) {

    console.log("deleteBird(" + id + ")");
    console.log(this.deleteBirdUrl + "?id=" + id);
    return (this._http.get<Bird[]>(this.deleteBirdUrl + "?id=" + id));  
  }

  createLink(id2: string, id3: string) {

    console.log("createink(" + id2 + ", " + id3 + ")");
    console.log(this.createLinkUrl + "?birdId=" + id2 + "&imageId=" + id3);
    var response = this._http.get<Link[]>(this.createLinkUrl + "?birdId=" + id2 + "&imageId=" + id3);
    console.log("response: " + response);
    return (response);
  }
  
  // public updateLink(id: string, id2: string, id3: string) {

  //   console.log("updateLink(" + id + ", " + id2 + ", " + id3 + ")");
  //   console.log(this.updateLinkUrl + "?id=" + id + "&birdId=" + id2 + "&imageId=" + id3);
  //   return (this._http.get<Link[]>(this.updateLinkUrl + "?id=" + id + "&birdId=" + id2 + "&imageId=" + id3));
  // }

  deleteLink(id: string) {

    console.log("deleteLink(" + id + ")");
    console.log(this.deleteLinkUrl + "?id=" + id);
    return (this._http.get<Link[]>(this.deleteLinkUrl + "?id=" + id));   
  }

}


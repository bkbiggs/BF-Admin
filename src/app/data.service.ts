import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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


  // add createImageUrl
  updateImageUrl =  'http://10.0.1.14/updateDescription/myDescEdit.php';
  // add deleteImageUrl
  getImageUrl = 'http://10.0.1.14/updateDescription/getImageData.php';
  
  // BirdUrl
  createBirdUrl = 'http://10.0.1.14/updateDescription/createBirdData.php'
  updateBirdUrl = 'http://10.0.1.14/updateDescription/updateBirdData.php';
  deleteBirdUrl = 'http://10.0.1.14/updateDescription/deleteBirdData.php';
  getBirdUrl = 'http://10.0.1.14/updateDescription/getBirdData.php';


  constructor(private _http: HttpClient) { }

  createLinkUrl = 'http://10.0.1.14/updateDescription/createLinkData.php';
  deleteLinkUrl = 'http://10.0.1.14/updateDescription/deleteLinkData.php';
  getLinkUrl = 'http://10.0.1.14/updateDescription/getLinkData.php';

  // ##### LINK #####

  createLink(id2: string, id3: string) {
    console.log("createLink(" + id2 + ", " + id3 + ")");
    console.log(this.createLinkUrl + "?birdId=" + id2 + "&imageId=" + id3);
    var response = this._http.get<Link[]>(this.createLinkUrl + "?birdId=" + id2 + "&imageId=" + id3);
    console.log("response: " + response);
    return (response);
  }
  
  deleteLink(id: string) {
    console.log("deleteLink(" + id + ")");
    console.log(this.deleteLinkUrl + "?id=" + id);
    return (this._http.get<Link[]>(this.deleteLinkUrl + "?id=" + id));  
  }

  getLinks() {
    var response = this._http.get<Link[]>(this.getLinkUrl);
    return (response);
  }

  // ##### Image #####

  updateImage(id: string, filename: string, camera: string, date: Date, time: string, description: Text, lastUpdate: string, status: string)  {
    console.log("updateImage(" + id + ")");
    var request = "this.updateImageUrl + ?id=" + id +
      "&filename=" + filename + "&camera=" + camera + "&date=" + date + "?time=" + time +
       "&desc=" + description + "&lastUpdate=" + lastUpdate + "&status=" + status;
    console.log("request: " + request);
    var response = this._http.get<Image[]>(request);
    // return this._http.get<Bird[]>(this.imageUrl + "?id=" + id); 
  }


  getImages() {
    // if (id != null ) {
      return this._http.get<Image[]>(this.getImageUrl);
    // } 
    // else {
    //   return this._http.get<Image[]>(this.getImageUrl+"?id="+id);
    // }
  }


  // ##### BIRD #####

  createBird(com: string, sci: string, webData: string, webImage: string)  {
    console.log("createBird(" + com + ", " + sci + "," + webData + ", " + webImage + ")");
    var request = this.createBirdUrl + "?comName=" + com + "&sciName=" + sci + "&webData=" + webData + "&webImage=" + webImage;
    console.log("Create: " + request);
    return this._http.get<Bird[]>(request);
  }

  // run the update for the change interaction
  updateBird(id: string, com: string, sci: string, webData: string, webImage: string)  {  
    console.log("updateBird(" + id + ", " + com + ", " + sci + "," + webData + ", " + webImage + ")");    
    var request = this.updateBirdUrl + "?id=" + id + "&comName=" + com + "&sciName=" + sci;    
    console.log("Update: " + request);
    return this._http.get<Bird[]>(request);
  }

  deleteBird(id: string) {
    console.log("deleteBird(" + id + ")");
    console.log(this.deleteBirdUrl + "?id=" + id);
    return (this._http.get<Bird[]>(this.deleteBirdUrl + "?id=" + id));  
  }

  getBirds() {
    return this._http.get<Bird[]>(this.getBirdUrl );
  }

}


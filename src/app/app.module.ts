import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';
import { BirdsComponent } from './birds/birds.component';
import { ImagesComponent } from './images/images.component';
import { LinksComponent } from './links/links.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BirdsComponent,
    ImagesComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

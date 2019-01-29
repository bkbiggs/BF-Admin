import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './links/links.component';
import { BirdsComponent } from './birds/birds.component';
import { ImagesComponent } from './images/images.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: 'links', component: LinksComponent },
  { path: 'birds', component: BirdsComponent },
  { path: 'images', component: ImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations:[
    BannerComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(HomeRouting),
    CommonModule,
  ],
})
export class HomeModule { }
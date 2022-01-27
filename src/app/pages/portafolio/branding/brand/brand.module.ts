import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TirolinaModule } from 'src/app/shared/tirolina/tirolina.module';
import { BreadCrumbModule } from 'src/app/shared/breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';
import { BrandComponent } from './brand.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LoadingImageModule } from 'src/app/shared/loadingImage/loadingImage.module';

@NgModule({
  declarations:[
    BrandComponent
  ],
  imports: [
    CommonModule,
    TirolinaModule,
    RouterModule,
    BreadCrumbModule,
    IvyCarouselModule,
    LoadingImageModule,
  ],
  exports:[
    BrandComponent
  ]
})
export class BrandModule { }
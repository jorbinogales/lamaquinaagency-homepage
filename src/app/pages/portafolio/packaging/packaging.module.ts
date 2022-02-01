import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TirolinaModule } from 'src/app/shared/tirolina/tirolina.module';
import { BreadCrumbModule } from 'src/app/shared/breadcrumb/breadcrumb.module';
import { PackagingComponent } from './packaging.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations:[
    PackagingComponent,
  ],
  imports:[
    CommonModule,
    TirolinaModule,
    BreadCrumbModule,
    IvyCarouselModule,
  ],
  exports:[
    PackagingComponent,
  ]
})
export class PackagingModule { }
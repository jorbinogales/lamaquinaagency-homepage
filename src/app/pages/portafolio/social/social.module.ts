import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social.component';
import { TirolinaModule } from 'src/app/shared/tirolina/tirolina.module';
import { BreadCrumbModule } from 'src/app/shared/breadcrumb/breadcrumb.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations:[
    SocialComponent,
  ],
  imports: [
    CommonModule,
    TirolinaModule,
    BreadCrumbModule,
    IvyCarouselModule,
  ],
  exports:[
      SocialComponent,
  ]
})
export class SocialModule { }
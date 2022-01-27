import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TirolinaModule } from 'src/app/shared/tirolina/tirolina.module';
import { BreadCrumbModule } from 'src/app/shared/breadcrumb/breadcrumb.module';
import { BradingComponent } from './branding.component';
import { RouterModule } from '@angular/router';
import { BrandingRouter } from './branding.routing';
import { BrandComponent } from './brand/brand.component';
import { BrandModule } from './brand/brand.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations:[
    BradingComponent
  ],
  imports: [
    BrandModule,
    CommonModule,
    TirolinaModule,
    RouterModule,
    BreadCrumbModule,
    RouterModule.forChild(BrandingRouter),
  ],
  exports:[
    BradingComponent
  ]
})
export class BrandingModule { }
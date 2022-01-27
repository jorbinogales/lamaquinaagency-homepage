import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BreadCrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [
    BreadCrumbComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    BreadCrumbComponent
  ],
})
export class BreadCrumbModule { }

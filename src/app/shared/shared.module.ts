import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layouts/layout.component';
import { NavModule } from './nav/nav.module';
import { RouterModule } from '@angular/router';
import { FooterModule } from './footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TirolinaModule } from './tirolina/tirolina.module';
import { BreadCrumbModule } from './breadcrumb/breadcrumb.module';
import { LoadingImageModule } from './loadingImage/loadingImage.module';

@NgModule({
  declarations:[ 
    LayoutComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavModule,
    FooterModule,
    TirolinaModule,
    BreadCrumbModule,
    LoadingImageModule,
  ],
  exports: [
    NavModule,
    LayoutComponent,
    FooterModule,
    TirolinaModule,
    BreadCrumbModule,
    LoadingImageModule,
  ]
})
export class SharedModule { }

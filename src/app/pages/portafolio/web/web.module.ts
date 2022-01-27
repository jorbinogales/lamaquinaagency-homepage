import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { TirolinaModule } from 'src/app/shared/tirolina/tirolina.module';
import { BreadCrumbModule } from 'src/app/shared/breadcrumb/breadcrumb.module';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  declarations:[
    WebComponent,
  ],
  imports: [
    CommonModule,
    BreadCrumbModule,
    TirolinaModule,
    NgxDocViewerModule
  ],
  exports:[
    WebComponent,
  ]
})
export class WebModule { }

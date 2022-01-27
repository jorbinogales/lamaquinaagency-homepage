import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoFolioComponent } from './logofolio.component';
import { TirolinaModule } from 'src/app/shared/tirolina/tirolina.module';
import { BreadCrumbModule } from 'src/app/shared/breadcrumb/breadcrumb.module';

@NgModule({
  declarations:[
    LogoFolioComponent,
  ],
  imports: [
    CommonModule,
    TirolinaModule,
    BreadCrumbModule,
  ],
  exports:[
      LogoFolioComponent,
  ]
})
export class LogoFolioModule { }
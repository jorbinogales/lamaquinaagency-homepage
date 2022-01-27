import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudiovisualComponent } from './audio.component';
import { TirolinaModule } from 'src/app/shared/tirolina/tirolina.module';
import { SafeUrlModule } from 'src/app/pipes/safe-url/safe-url.module';
import { BreadCrumbModule } from 'src/app/shared/breadcrumb/breadcrumb.module';

@NgModule({
  declarations:[
    AudiovisualComponent,
  ],
  imports:[
    CommonModule,
    TirolinaModule,
    SafeUrlModule,
    BreadCrumbModule,
  ],
  exports:[
    AudiovisualComponent,
  ]
})
export class AudiovisualModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NosotrosComponent } from './nosotros.component';
import { NosotrosRouting } from './nosotros.routing';
import { TirolinaModule } from 'src/app/shared/tirolina/tirolina.module';

@NgModule({
  declarations:[
    NosotrosComponent,
  ],
  imports: [
    RouterModule.forChild(NosotrosRouting),
    CommonModule,
    TirolinaModule
  ],
})
export class NosotrosModule { }
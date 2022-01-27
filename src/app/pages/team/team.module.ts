import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { TeamRouting } from './team.routing';
import { TirolinaModule } from 'src/app/shared/tirolina/tirolina.module';

@NgModule({
  declarations:[
    TeamComponent,
  ],
  imports: [
    RouterModule.forChild(TeamRouting),
    CommonModule,
    TirolinaModule
  ],
})
export class TeamModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactRouting } from './contact.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations:[
    ContactComponent,
  ],
  imports: [
    RouterModule.forChild(ContactRouting),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class ContactModule { }
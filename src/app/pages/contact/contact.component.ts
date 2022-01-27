import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { PeopleModel } from 'src/app/models/people.model';
import { ContactService } from './contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

    loading: any = false;
    send: boolean = false;
    error: boolean = false;
    formGroup: any = FormGroup;

    constructor(
      private readonly _formBuilder: FormBuilder,
      private readonly contactService: ContactService,
    ){}

    ngOnInit(){
      this.formGroup = this._formBuilder.group({
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required]],
      });
    }

    submit(){
      this.loading = true;
      this.send = false;
      this.error = false;
      const FormData = this.formGroup.getRawValue();
      this.contactService.sendMessage(FormData).subscribe((res: any) => {  
        this.error = null;
        this.send = true;
        this.loading = false;
        this.formGroup.reset();
      }, (err) => {
          this.loading = false;
          this.send = false;
          this.error = true
      })
    }
}

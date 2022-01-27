import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BrandInterface } from 'src/app/interface/brand.interface';
import { BrandService } from './brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit{

    brand: BrandInterface;
    menu: any[] = [];
    route: any;

    logo: string = '';

    images: any[] = [];

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private readonly brandService: BrandService,
    ){}

    ngOnInit(){


        this.brandService.brand$
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((brand: BrandInterface) => {
            this.logo = `assets/img/portafolio/branding/${ brand.logo }`;
            this.brand = brand;
            this.route = brand.brand;
            this.images = brand.carousel;
        });
       
        this.menu = [
          {
            name:"Home",
            path: ['']
          },
          {
            name:"Portafolio",
            path: ['', 'portafolio'],
          },
          {
            name: this.brand.brand.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))),
            path: ['', 'portafolio', 'branding', this.brand.brand],
          }
        ]
    }
}
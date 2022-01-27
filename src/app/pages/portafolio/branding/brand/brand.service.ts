import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BrandInterface } from 'src/app/interface/brand.interface';
import brands from './../../../../data/json/branding.json';

@Injectable({
  providedIn: 'root'
})
export class BrandService {


  public _brand: BehaviorSubject<BrandInterface | null> = new BehaviorSubject(null);


  constructor() { }

  /* GET PROFILE */
  get brand$(): Observable<BrandInterface>
  {
    return this._brand.asObservable();
  }

 

  get_brand(url: string): Observable<any> {
    const brandings = brands;
    let response = null;
    brandings.map((branding: any) => {
        if(branding.url == url){
            this._brand.next(branding);
        }
    })
    return response;
  }

}
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { BrandService } from './brand.service';
@Injectable({
  providedIn: 'root'
})
export class BrandResolver implements Resolve<boolean> {
    constructor(private readonly brandService: BrandService){}

    /** 
    * Resolver
    * 
    * @param route
    * @param state
    */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const brand = route.params.brand;
    return this.brandService.get_brand(brand);
  }
}



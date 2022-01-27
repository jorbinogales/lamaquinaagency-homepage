import { Component, OnInit } from '@angular/core';
import packaging from '../../../data/json/packaging.json';
@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styleUrls: ['./packaging.component.scss']
})
export class PackagingComponent implements OnInit{

  packaging: any;
    menu: any[] = [
      {
        name:"Home",
        path: ['']
      },
      {
        name:"Portafolio",
        path: ['', 'portafolio'],
      },
      {
        name:"Branding",
        path: ['', 'portafolio', 'branding'],
      }
    ]

    constructor(){}

    ngOnInit(){
        this.packaging = packaging;
    }
}
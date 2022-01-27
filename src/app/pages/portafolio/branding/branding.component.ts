import { Component, OnInit } from '@angular/core';
import branding from './../../../data/json/branding.json';
@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BradingComponent implements OnInit{

    brandings: any;
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
        this.brandings = branding;
    }
}
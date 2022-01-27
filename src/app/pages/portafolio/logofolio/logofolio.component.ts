import { Component, OnInit } from '@angular/core';
import logofolios from './../../../data/json/logofolio.json';

@Component({
  selector: 'app-logofolio',
  templateUrl: './logofolio.component.html',
  styleUrls: ['./logofolio.component.scss']
})
export class LogoFolioComponent implements OnInit{

    logofolios: any;
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
        name:"Logofolio",
        path: ['', 'portafolio', 'logofolio'],
      }
    ]

    constructor(){}

    ngOnInit(){
        this.logofolios = logofolios;
    }
}
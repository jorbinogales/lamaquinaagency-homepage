import { Component, OnInit } from '@angular/core';
import portafolio from './../../data/json/portafolio.json';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit{

  menu: any[] = [
    {
      name:"Home",
      path: ['']
    },
    {
      name:"Portafolio",
      path: ['', 'portafolio'],
    },
  ]


    portafolio: any;
    constructor(){}

    ngOnInit(){
        this.portafolio = portafolio;
    }
}
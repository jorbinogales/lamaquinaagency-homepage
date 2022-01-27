import { Component, OnInit } from '@angular/core';
import web from './../../../data/json/web.json';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit{

    webs: any;
    pdfSrc: any;
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
        name:"Web",
        path: ['', 'portafolio', 'web'],
      }
    ]

    constructor(){}

    ngOnInit(){
        this.webs = web;
    }

    openModal(url:string){
      this.pdfSrc = url;
    }
}
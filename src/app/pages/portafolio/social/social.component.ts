import { Component, OnInit } from '@angular/core';
import social from './../../../data/json/social.json';
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit{

    socials: any;
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
        name:"Social Content",
        path: ['', 'portafolio', 'social'],
      }
    ]

    constructor(){}

    ngOnInit(){
        this.socials = social;
    }
}
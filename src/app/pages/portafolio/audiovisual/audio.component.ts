import { Component, OnInit } from '@angular/core';
import videos from '../../../data/json/audiovisual.json';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudiovisualComponent implements OnInit{

    videos: any;
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
        name:"Audiovisual",
        path: ['', 'portafolio', 'audiovisual'],
      }
    ]

    constructor(){}

    ngOnInit(){
        this.videos = videos;
    }
}
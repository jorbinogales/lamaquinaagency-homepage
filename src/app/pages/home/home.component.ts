import { Component, OnInit } from '@angular/core';
import alavan from './../../data/json/alavan.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

    alavan: any;

    constructor(){}

    ngOnInit(){
        this.alavan = alavan;
        console.log(this.alavan.length);
    }
}

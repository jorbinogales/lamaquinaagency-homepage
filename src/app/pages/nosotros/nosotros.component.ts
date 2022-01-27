import { Component, OnInit } from '@angular/core';
import nosotros from './../../data/json/nosotros.json';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit{


    nosotros: any;
    constructor(){}

    ngOnInit(){
        this.nosotros = nosotros;
    }
}
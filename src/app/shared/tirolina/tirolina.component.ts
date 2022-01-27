import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tirolina',
  templateUrl: './tirolina.component.html',
  styleUrls: ['./tirolina.component.scss']
})
export class TirolinaComponent implements OnInit{

    scroll_height: any;
    polea: any;
    cuerda: any;
    circle: any;
    
    constructor(){}

    ngOnInit(): void {
        this.scroll_height = window.scrollY;
        this.circle = `rotate(${this.scroll_height / 2}deg)`;
        this.polea = this.scroll_height + 'px';
        this.cuerda = window.scrollY + 100 + 'px';
    }

    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {

        this.scroll_height = window.scrollY;
        this.polea = this.scroll_height + 'px';
        this.cuerda = window.scrollY + 100 + 'px';
        this.circle = `rotate(${window.scrollY / 2}deg)`;
    }

    
}

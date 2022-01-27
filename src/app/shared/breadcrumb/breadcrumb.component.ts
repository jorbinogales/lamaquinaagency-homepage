import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadCrumbComponent implements OnInit{

    @Input()
    menu: any[];
    
    constructor(){}

    ngOnInit(): void {
    }
}

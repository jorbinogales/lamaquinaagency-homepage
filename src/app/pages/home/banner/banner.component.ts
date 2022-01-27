import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{

    btnStatus: boolean = false;
    
    constructor(){}

    ngOnInit(){
        
    }

    activate(){
        let circle1:any = document.getElementById('circle1');
        let circle2:any = document.getElementById('circle2');
        let circle3:any = document.getElementById('circle3');
        let circle4:any = document.getElementById('circle4');
        
  
        let cuerda:any = document.getElementById('cuerda');
        let middle:any = document.getElementById('line-middle'); 
        let top:any= document.getElementById('line-top');
        let central:any = document.getElementById('line-central');
        let faroDown:any = document.getElementById('line-faro-down');
        let tilde:any = document.getElementById('tilde-relleno');
        let faro:any = document.getElementById('faro');
        let curvaYellow:any = document.getElementById('curva-yellow');
        let curvaBlue:any = document.getElementById('curva-rellena-blue');
        let semicurva:any = document.getElementById('semicurva-blue');
        let background2:any = document.getElementById('background2');
        let button:any = document.getElementById('button');

        this.btnStatus = !this.btnStatus;

        if(!this.btnStatus){
                circle1.classList = 'circle-faro circle-active';
                circle2.classList = 'circle-top circle-active';
                circle3.classList = 'circle-middle-right circle-active';
                circle4.classList = 'circle-middle-left circle-active';
                cuerda.classList = 'cuerda active';
                middle.classList = 'line-middle active';
                top.classList = 'line-top active';
                central.classList = 'linea-central active';
                faroDown.classList = 'line-faro-down active';
                tilde.classList = 'tilde-relleno active'
                curvaYellow.classList = 'curva-yellow active';
                curvaBlue.classList = 'curva-rellena-blue active';
                semicurva.classList = 'semicurva-blue active';
                background2.classList = 'background2 active';
                button.classList = 'button-change active';

                      // EN CUANTO TERMINAN DE GIRAR LAS RUEDAS
                setTimeout(function () {
                    faro.style.transition = '1s ease-in-out';
                    faro.style.opacity = 0;
                    faroDown.style.transition = '1s ease-in-out';
                    faroDown.style.opacity = 0;
                }, 5000);

                // EN CUANTO TERMINAN DE GIRAR LAS RUEDAS
                setTimeout(function () {
                    circle1.style.transition = '1s ease-in-out';
                    circle1.style.opacity = 0;
                }, 4000);
                // EN CUANTO TERMINAN DE GIRAR LAS RUEDAS
                setTimeout(function () {
                    circle2.style.transition = '1s ease-in-out';
                    circle2.style.opacity = 0;
                }, 3000);
                // EN CUANTO TERMINAN DE GIRAR LAS RUEDAS
                setTimeout(function () {
                    circle3.style.transition = '1s ease-in-out';
                    circle3.style.opacity = 0;
                }, 2000);
                // EN CUANTO TERMINAN DE GIRAR LAS RUEDAS
                setTimeout(function () {
                    circle4.style.transition = '1s ease-in-out';
                    circle4.style.opacity = 0;
                    cuerda.style.transition = '1s ease-in-out';
                    cuerda.style.opacity = 0;
                }, 1000);
        }

        if(this.btnStatus){
            circle1.classList = 'circle-faro';
            circle2.classList = 'circle-top';
            circle3.classList = 'circle-middle-right';
            circle4.classList = 'circle-middle-left';
            cuerda.classList = 'cuerda';
            middle.classList = 'line-middle';
            top.classList = 'line-top';
            central.classList = 'linea-central';
            faroDown.classList = 'line-faro-down ';
            tilde.classList = 'tilde-relleno '
            curvaYellow.classList = 'curva-yellow';
            curvaBlue.classList = 'curva-rellena-blue';
            semicurva.classList = 'semicurva-blue';
            background2.classList = 'background2';
            button.classList = 'button-change';
            faro.style.opacity = 1;
            faroDown.style.opacity = 1;
            circle1.style.opacity = 1;
            circle1.style.opacity = 1;
            circle2.style.opacity = 1;
            circle3.style.opacity = 1;
            circle4.style.opacity = 1;
            cuerda.style.opacity = 1;
        }


    }
}

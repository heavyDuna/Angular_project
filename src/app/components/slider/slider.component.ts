import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { Pelicula } from 'src/app/interfaces/cartelera-respuesta';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  @Input() peliculas : Pelicula[];

  public Swiper: Swiper; //Inicializado como una propiedad, para poder utilizarlo en el evento ng-click.

  constructor() { }

  ngAfterViewInit(): void {     //inicializar el swiper
    this.Swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    });
  }

  ngOnInit(): void {

    //console.log(this.peliculas);
  }

  onSlidePrev() {

    this.Swiper.slidePrev();
  }

  onSlideNext() {

    this.Swiper.slideNext();
  }
}

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper, { Autoplay } from 'swiper';

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
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    });
  }

  ngOnInit(): void {

    Swiper.use([
      Autoplay
    ]);
  }

  onSlidePrev() {

    this.Swiper.slidePrev();
  }

  onSlideNext() {

    this.Swiper.slideNext();
  }
}

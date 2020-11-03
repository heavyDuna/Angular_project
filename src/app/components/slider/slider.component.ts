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

  constructor() { }

  ngAfterViewInit(): void {     //inicializar el swiper
    const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    })
  }

  ngOnInit(): void {

    console.log(this.peliculas);
  }

}

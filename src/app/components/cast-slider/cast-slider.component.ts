import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/creditos-respuesta';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.css']
})
export class CastSliderComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];                  //recibiendo la info mediante el input

  public Swiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.Swiper = new Swiper('.swiper-container', {
    slidesPerView: 5.3,
    freeMode: true,
    spaceBetween: 15,
    });
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/cartelera-respuesta';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() peliculas : Pelicula[];

  constructor() { }

  ngOnInit(): void {

    console.log(this.peliculas);
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { Pelicula } from 'src/app/interfaces/cartelera-respuesta';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() peliculas : Pelicula[];

  constructor() { }

  ngOnInit(): void {
    //console.log(this.peliculas);
  }

}

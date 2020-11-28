import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pelicula } from 'src/app/interfaces/cartelera-respuesta';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() peliculas : Pelicula[];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    //console.log(this.peliculas);
  }

  clickPelicula( peliculaDetalle: Pelicula ) {
    console.log(peliculaDetalle)
    this.router.navigate(['/pelicula', peliculaDetalle.id]);            //navegación a pelicula
  }

}

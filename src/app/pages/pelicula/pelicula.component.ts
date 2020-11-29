import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeliculaDetalle } from 'src/app/interfaces/pelicula-detalle';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Cast } from 'src/app/interfaces/creditos-respuesta';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: PeliculaDetalle;
  public cast: Cast[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location ) { }       //información de la localización del usuario

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id;      //activatedRoute para coger el id de pelicula de la url y tenerlo siempre

    this.peliculasService.recuperarDetallesPelicula( id ).subscribe( pelicula => {
      //console.log(pelicula);
      this.pelicula = pelicula;
    });

    this.peliculasService.recuperarCastPelicula ( id ).subscribe ( cast => {
      console.log(cast);
      this.cast = cast.filter( actor => actor.profile_path !== null  );
    });

  }

  goBack() {
    this.location.back();
  }

}

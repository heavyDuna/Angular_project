import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeliculaDetalle } from 'src/app/interfaces/pelicula-detalle';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: PeliculaDetalle;

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location ) { }       //información de la localización del usuario

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id;      //activatedRoute para coger el id de pelicula de la url y tenerlo siempre

    this.peliculasService.recuperarDetallesPelicula( id ).subscribe( pelicula => {
      console.log(pelicula);
      this.pelicula = pelicula;
    });
  }

  goBack() {
    this.location.back();
  }

}

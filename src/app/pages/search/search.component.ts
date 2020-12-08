import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/interfaces/cartelera-respuesta';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public texto: string = '';
  public peliculas: Pelicula[] = [];

  constructor( private activatedRoute: ActivatedRoute,                                //para obtener el valor de la url
               private peliculasServicio: PeliculasService ) {                        //inyecto el servicio

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      this.texto = params.texto;

      this.peliculasServicio.buscarPeliculas( this.texto ).subscribe( peliculas => {
        this.peliculas = peliculas;
      })
    })

  }

}

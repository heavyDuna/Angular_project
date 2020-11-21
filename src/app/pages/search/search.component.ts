import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,      //para obtener el valor de la url
               private peliculasServicio: PeliculasService ) {        //inyecto el servicio

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.peliculasServicio.buscarPeliculas( params.texto ).subscribe( peliculas => {
        //console.log(peliculas[0].title);
      })
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/cartelera-respuesta';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public peliculas: Pelicula[] = [];

  constructor(private PeliculasService : PeliculasService) { }

  ngOnInit(): void {
      this.PeliculasService.recuperarCartelera()
        .subscribe( resp => {
          //console.log(resp);
          this.peliculas = resp.results;
        })
  }
}

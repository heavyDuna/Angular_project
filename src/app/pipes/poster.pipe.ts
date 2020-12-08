import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform( posterpelicula: string ): string {     //recibimos el "id" del poster_path, que es un string y devolvemos también un string
    //console.log(posterpelicula)
    if ( posterpelicula ) {
      return `https:image.tmdb.org/t/p/w500${ posterpelicula }`;
    }else {
      return '../../assets/no-image-available.jpg';
    }
  }

}

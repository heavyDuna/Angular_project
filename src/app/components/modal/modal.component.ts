import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PeliculaDetalle } from 'src/app/interfaces/pelicula-detalle';
import { VideoPelicula } from 'src/app/interfaces/video-pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() pelicula: PeliculaDetalle;

  closeResult = '';
  public url: any;
  public video: VideoPelicula;
  public key: any;

  safeSrc: SafeResourceUrl;

  constructor(private modalService: NgbModal,
              private peliculasService: PeliculasService,
              private sanitizer: DomSanitizer ) {

  }

  ngOnInit(): void {

    this.peliculasService.recuperarVideoPelicula( this.pelicula.id ).subscribe( video => {
      this.key = video.results[0].key;
      this.url = `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1`;

      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    });

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})
export class ListaImagenesComponent implements OnInit{

  imagenes: any[] = [];
  imagenSeleccionada: any = null;

  constructor(private imagenesService: ImagenesService, private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.obtenerImgenes();
  }



  obtenerImgenes(){
    this.imagenesService.getImagenes().subscribe(data => this.imagenes = data)
  }



  getImagenPorId(id:number) {
    this.imagenesService.getImagenById(id)
      .subscribe(data => {
        const imagenBlod = new Blob([data],{type:'image/jpeg'});
        const imagenUrl = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(imagenBlod));
        this.imagenSeleccionada = {url: imagenUrl, nombre: data.nombre};
      },
      (error) => {
        console.log(error);

      }
      )
  }



}

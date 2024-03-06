import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  imagenes: any[] = [];
  selectedFile: File | null = null;


  imagePreview: string | ArrayBuffer | null = null;

  constructor(private imagenesService: ImagenesService, private sanitizer: DomSanitizer){}

  ngOnInit(): void {

  }



  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  cargarImgenen(){
    if (this.selectedFile) {
      this.imagenesService.cargarImagen(this.selectedFile).subscribe(data => {
        console.log(data);
        location.reload();

      },(error => {
        console.error(error);

      }));
    }
  }



}

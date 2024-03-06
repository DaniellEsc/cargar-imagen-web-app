import { Component } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  imagenes: any[] = [];
  selectedFile: File | null = null;
  loading: boolean = false;


  imagePreview: string | ArrayBuffer | null = null;

  constructor(private imagenesService: ImagenesService, private sanitizer: DomSanitizer){}


  onFileSelected(event: any){
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.style.display = 'none';
    }
    this.loading = true;
    this.selectedFile = event.target.files[0];
    setTimeout(() => {
      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
      this.loading = false;
    }, 1000)
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



  readFile(file: File){
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
    this.loading = false;
  }




  descargarImagen() {
    if (this.imagePreview) {
      const link = document.createElement('a');
      link.href = this.imagePreview as string;
      link.download = 'imagen';
      link.click();
    }
  }





}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  private URL = 'http://localhost:8080/imagenes';

  constructor(private http: HttpClient) { }

  getImagenes():Observable<any> {

    return this.http.get(`${this.URL}/all`);
  }

  cargarImagen(imagen: File):Observable<any> {
    const formData = new FormData();
    formData.append('file', imagen);
    return this.http.post(`${this.URL}/cargar-imagen`, formData);
  }

  getImagenById(id: number):Observable<any>{
    return this.http.get(`${this.URL}/${id}`, {responseType:'blob'});
  }



}

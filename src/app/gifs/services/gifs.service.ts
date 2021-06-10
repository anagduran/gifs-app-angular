import { SearchGfisResponse, Gif } from './../interfaces/gifs.interface';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GifsService {

 private _historial: string[] = [];
 private apiKey: string = 'BxE42xXHlaHbbCYXJkeo1tVR9Xlemb88';
 public resultados: Gif[] = [];
 private servicioUrl= 'https://api.giphy.com/v1/gifs'

constructor(private http: HttpClient){

  this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

}
 get historial(){

   return [...this._historial]
 }

 buscarGifs(query: string =''){
  
  query = query.trim().toLocaleLowerCase();

  if(!this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10)

    localStorage.setItem('historial', JSON.stringify(this.historial))
  }

  const params = new HttpParams()
                     .set('api_key', this.apiKey)
                     .set('limit','12')
                     .set('q',query);

  console.log(this.servicioUrl)

  this.http.get<SearchGfisResponse>(`${this.servicioUrl}/search`, {params})
  .subscribe( (resp) => {
    console.log(resp.data)
    this.resultados = resp.data
    
    localStorage.setItem('resultados', JSON.stringify(this.resultados))
  })
    


  console.log(this._historial)
 }



}

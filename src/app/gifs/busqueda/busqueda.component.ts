import { GifsService } from './../services/gifs.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  @ViewChild('txtBuscar') txtBuscar:ElementRef<HTMLInputElement>; 

  ngOnInit(): void {
  }

  buscar(){

    
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length == 0) {
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value ="";
    
  }

}

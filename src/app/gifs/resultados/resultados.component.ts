import { GifsService } from './../services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get resultados(){
    return this.gifsService.resultados
  }

  ngOnInit(): void {
  }

}

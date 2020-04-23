import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inside-header',
  templateUrl: './inside-header.component.html',
  styleUrls: ['./inside-header.component.scss']
})
export class InsideHeaderComponent implements OnInit {

  public routes : any[];

  constructor() {
    this.routes = [
      { label : "Lista de Fotos", link : "/photos" },
      { label : "Pesquisar Fotos", link : "/photos-search" },
      { label : "Tópicos", link : "/topics" },
    ]
  }

  ngOnInit() {
  }

}

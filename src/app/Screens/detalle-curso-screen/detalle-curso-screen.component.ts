import { Component, OnInit } from '@angular/core';
import { VideoS } from 'src/app/interfaces/video';
 

@Component({
  selector: 'app-detalle-curso-screen',
  templateUrl: './detalle-curso-screen.component.html',
  styleUrls: ['./detalle-curso-screen.component.scss']
})
export class DetalleCursoScreenComponent implements OnInit {

  

  comentarios:any[] = [
    {
      id:1,
      autor:"Andrés Rodriguez",
      contenido:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      id:2,
      autor:"Juliana Rivera",
      contenido:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor."
    },
    {
      id:3,
      autor:"Juan Camilo Gomez",
      contenido:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

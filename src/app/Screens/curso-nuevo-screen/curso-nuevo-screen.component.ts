import { Component, OnInit } from '@angular/core';
import {CursosService} from '../../services/cursos.service';
 
@Component({
  selector: 'app-curso-nuevo-screen',
  templateUrl: './curso-nuevo-screen.component.html',
  styleUrls: ['./curso-nuevo-screen.component.scss']
})
export class CursoNuevoScreenComponent implements OnInit {

  contenidos: any[] =[
    {
      url: "https://www.youtube.com/embed/AEiRa5xZaZw",
      titulo: "Introducción a la Programación Web",
      texto: "Módulo 1: Clase 1",
      descripcion:"descfidouasodnasd"
    },
    {
      url: "https://www.youtube.com/embed/xnWtGNiG2lg",
      titulo: "Aspectos Generales",
      texto: "Módulo 1: Clase 2",
      descripcion:" otro sdsadas  bm descfidouasodnasd"
    },
    {
      url: "https://www.youtube.com/embed/xnWtGNiG2lg",
      titulo: "Fundamentos de HTML y CSS",
      texto: "Módulo 1: Clase 1",
      descripcion:" otro sdsadas etcetreaa bm descfidouasodnasd"
    }
  ]

  arrayCursos:CursosService = new CursosService

  constructor() { }

  ngOnInit(): void {
  }

}

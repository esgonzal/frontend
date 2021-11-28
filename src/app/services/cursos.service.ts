import { Injectable } from '@angular/core';
import { VideoS } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  
  ArrayVideos: VideoS[] =
  [
    {
      idcurso: 1,
      curso:"Programación",
      idvideo:1,
      total: 3,
      titulo: "Curso de Programación en JS",
      url: "https://www.youtube.com/embed/rEsSxd0L4GI"
    },
    {
      idcurso: 2,
      curso:"Diseño",
      idvideo:2,
      total: 3,
      titulo: "Curso de Diseño",
      url: "https://www.youtube.com/embed/rEsSxd0L4GI"
    },
    {
      idcurso: 3,
      curso:"Programación",
      idvideo:2,
      total: 3,
      titulo: "Curso de Desarrollo en Videojuegos",
      url: "https://www.youtube.com/embed/rEsSxd0L4GI"
    },
    {
      idcurso: 4,
      curso:"Diseño",
      idvideo:2,
      total: 3,
      titulo: "Curso de Diseño de Interfaz",
      url: "https://www.youtube.com/embed/rEsSxd0L4GI"
    },
    {
      idcurso: 5,
      curso:"Diseño",
      idvideo:2,
      total: 3,
      titulo: "Curso de Video Digital",
      url: "https://www.youtube.com/embed/rEsSxd0L4GI"
    },
    {
      idcurso: 3,
      curso:"Humanidades",
      idvideo:3,
      total: 3,
      titulo: "Curso de Filosofia",
      url: "https://www.youtube.com/embed/rEsSxd0L4GI"
    },
  ];



  constructor() { }


}